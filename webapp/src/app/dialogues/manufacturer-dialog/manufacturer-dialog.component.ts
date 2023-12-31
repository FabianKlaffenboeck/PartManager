import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, Validators} from "@angular/forms";
import {ManufacturerModel} from "../../service/models/Manufacturer.model";
import {DialogModelData} from "../part-dialog/part-dialog.component";

@Component({
  selector: 'app-part-dialog', templateUrl: './manufacturer-dialog.component.html',
})

export class ManufacturerDialogComponent {
  nameControl = new FormControl('', [Validators.required]);

  constructor(@Inject(MAT_DIALOG_DATA)
              public data: DialogModelData,
              public dialogRef: MatDialogRef<ManufacturerDialogComponent>) {
    if (data.mode == "edit") {
      this.nameControl.setValue(data.model.name || null)
    }
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  allowSave(): boolean {
    return this.nameControl.invalid;
  }

  onSaveClick(): void {
    let manufacturer: ManufacturerModel = {
      id: undefined, name: this.nameControl.value || undefined,
    };
    if (this.data.mode == "edit") {
      manufacturer.id = this.data.model.id
    }
    this.dialogRef.close(manufacturer);
  }
}

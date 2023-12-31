import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, Validators} from "@angular/forms";
import {DialogModelData} from "../part-dialog/part-dialog.component";
import {PartTypeModel} from "../../service/models/PartType.model";

@Component({
  selector: 'app-part-dialog', templateUrl: './partType-dialog.component.html',
})

export class PartTypeDialogComponent {
  typeControl = new FormControl('', [Validators.required]);

  constructor(@Inject(MAT_DIALOG_DATA)
              public data: DialogModelData,
              public dialogRef: MatDialogRef<PartTypeDialogComponent>) {

    if (data.mode == "edit") {
      this.typeControl.setValue(data.model.name || null)
    }
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  allowSave(): boolean {
    return this.typeControl.invalid;
  }

  onSaveClick(): void {
    let partType: PartTypeModel = {
      id: undefined, name: this.typeControl.value || undefined,
    };
    if (this.data.mode == "edit") {
      partType.id = this.data.model.id
    }
    this.dialogRef.close(partType);
  }
}

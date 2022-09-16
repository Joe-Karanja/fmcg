import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-add-spare-part',
  templateUrl: './add-spare-part.component.html',
  styleUrls: ['./add-spare-part.component.scss']
})
export class AddSparePartComponent implements OnInit {
  cardTitle: string;
  editBool: boolean;
  editData: boolean;
  spare:any;
  errorMessage: string;
  form: FormGroup;
  loading: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    public dialogRef: MatDialogRef<AddSparePartComponent>,
    private _httpService: HttpService,
    private fb: FormBuilder,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.editBool = this.data['updateSpare'];
    this.editData = this.data['updateSpare'];
    this.cardTitle = this.editData ? "Update Spare Part Details": "Add New Spare Part";
    this.spare = this.data['data'];

    this.form = this.fb.group({
      sparePartName:[this.spare ? this.spare['sparePartName']: '', Validators.compose([Validators.required])],
      price:[this.spare ? this.spare['price']: '', Validators.compose([Validators.required])],
      currency:[this.spare ? this.spare['currency']: '', Validators.compose([Validators.required])],
      sparePartDescription:[this.spare ? this.spare['sparePartDescription']: '', Validators.compose([Validators.required])],
      createdBy:[this.spare ? this.spare['createdBy']: '', Validators.compose([Validators.required])],
    });
  }

  //closes dialog
  close(): void {
    setTimeout(() => {
      this.dialogRef.close();
    }, 500);
  }

}

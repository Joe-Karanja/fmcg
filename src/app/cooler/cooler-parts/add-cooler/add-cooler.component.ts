import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-add-cooler',
  templateUrl: './add-cooler.component.html',
  styleUrls: ['./add-cooler.component.scss']
})
export class AddCoolerComponent implements OnInit {
  cardTitle: string;
  editBool: boolean;
  editData: boolean;
  cooler:any;
  errorMessage: string;
  form: FormGroup;
  loading: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    public dialogRef: MatDialogRef<AddCoolerComponent>,
    private _httpService: HttpService,
    private fb: FormBuilder,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.editBool = this.data['updateCooler'];
    this.editData = this.data['updateCooler'];
    this.cardTitle = this.editData ? "Update Cooler Details": "Add New Cooler";
    this.cooler = this.data['data'];

    this.form = this.fb.group({
      model:[this.cooler ? this.cooler['model']: '', Validators.compose([Validators.required])],
      assetNumber:[this.cooler ? this.cooler['assetNumber']: '', Validators.compose([Validators.required])],
      coolerSize:[this.cooler ? this.cooler['coolerSize']: '', Validators.compose([Validators.required])],
      status:[this.cooler ? this.cooler['status']: '', Validators.compose([Validators.required])],
      remarks:[this.cooler ? this.cooler['remarks']: '', Validators.compose([Validators.required])],
    });
  }

  //closes dialog
  close(): void {
    setTimeout(() => {
      this.dialogRef.close();
    }, 500);
  }

}

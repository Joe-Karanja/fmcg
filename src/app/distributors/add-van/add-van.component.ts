import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-add-van',
  templateUrl: './add-van.component.html',
  styleUrls: ['./add-van.component.scss']
})
export class AddVanComponent implements OnInit {
  cardTitle: string;
  updateVan: boolean;
  editBool: boolean;
  editData: boolean;
  van:any;
  errorMessage: string;
  form: FormGroup;
  loading: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    public dialogRef: MatDialogRef<AddVanComponent>,
    private _httpService: HttpService,
    private fb: FormBuilder,
    private toastr: ToastrService,
  ) { }
  
  ngOnInit(): void {
    this.editBool = this.data['updateVan'];
    this.editData = this.data['updateVan'];
    this.cardTitle = this.editData ? "Update Van Details": "Add New Van";
    this.van = this.data['data']; 


    this.form = this.fb.group({
      cdCode:[this.van ? this.van['cdCode']: '', Validators.compose([Validators.required])],
      vehicleType:[this.van ? this.van['vehicleType']: '', Validators.compose([Validators.required])],
      plateNumber:[this.van ? this.van['plateNumber']: '', Validators.compose([Validators.required])],
      userName:[this.van ? this.van['userName']: '', Validators.compose([Validators.required])],
      salespersonId:[this.van ? this.van['salespersonId']: '', Validators.compose([Validators.required])],
    });
  }

  //closes dialog
  close(): void {
    setTimeout(() => {
      this.dialogRef.close();
    }, 500);
  }

}

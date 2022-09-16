import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit {
  cardTitle: string;
  editBool: boolean;
  editData: boolean;
  company:any;
  errorMessage: string;
  form: FormGroup;
  loading: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    public dialogRef: MatDialogRef<AddCompanyComponent>,
    private _httpService: HttpService,
    private fb: FormBuilder,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.editBool = this.data['updateCompany'];
    this.editData = this.data['updateCompany'];
    this.cardTitle = this.editData ? "Update Company Details": "Add New Company";
    this.company = this.data['data'];

    this.form = this.fb.group({
      companyName:[this.company ? this.company['companyName']: '', Validators.compose([Validators.required])],
      email:[this.company ? this.company['email']: '', Validators.compose([Validators.required])],
      location:[this.company ? this.company['location']: '', Validators.compose([Validators.required])],
      contactName:[this.company ? this.company['contactName']: '', Validators.compose([Validators.required])],
      contactPhone:[this.company ? this.company['contactPhone']: '', Validators.compose([Validators.required])],
      remarks:[this.company ? this.company['remarks']: '', Validators.compose([Validators.required])],
    });
  }

  //closes dialog
  close(): void {
    setTimeout(() => {
      this.dialogRef.close();
    }, 500);
  }

}

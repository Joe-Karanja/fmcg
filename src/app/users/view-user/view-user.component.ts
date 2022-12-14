import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';


import { EditUserComponent } from './edit-user/edit-user.component';
import { BlockUnblockComponent } from '../block-unblock/block-unblock.component';
import { HttpService } from 'src/app/shared/services/http.service';
import { ForgotPasswordDialogComponent } from 'src/app/auth/forgot-password-dialog/forgot-password-dialog.component';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  
  blockedStatus: boolean = false;
  blockValidated: boolean = false;
  idUser: number;
  user: any;
  page: number = 1;
  perPage: number = 10;

  constructor(
    public dialog: MatDialog,
    private _httpService: HttpService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  //retrieves single user details
  loadData(): void {
    this.idUser = +this.route.snapshot.paramMap.get('id');
    let model = {
      id: this.idUser
    };
    this._httpService.post("api/v1/user/get-user-details", model).subscribe(res => {
      if(res["status"] === 200) {
        this.user = res["data"];
        console.log('this.user')
        console.log(this.user)
        let roles = JSON.parse(localStorage.getItem("userRoles"));
        this.blockValidated = roles.includes("block reset user");
      }
      
    })
  }

  //blocks user
  blockThisUser(): void {
    let id = this.idUser;
    this.blockedStatus = true;
    const dialogRef = this.dialog.open(BlockUnblockComponent, {data: {data: id, status: this.blockedStatus}, height: "400px", width: "400px", disableClose: true});
    dialogRef.afterClosed().subscribe(() => {
      this.loadData();
    })
  }

  //unblocks user
  unBlockThisUser(): void {
    let id = this.idUser;
    this.blockedStatus = false;
    const dialogRef = this.dialog.open(BlockUnblockComponent, {data: {data: id, status: this.blockedStatus}, height: "400px", width: "400px", disableClose: true});
    dialogRef.afterClosed().subscribe(() => {
      this.loadData();
    })
  }

  //triggers edit dialog
  editUser(data: any): void {
    let userDetails = data;
    const dialogRef = this.dialog.open(EditUserComponent, {data: {data: userDetails, id: this.idUser}, height: '400px', width: '500px', disableClose: true});
    dialogRef.afterClosed().subscribe(() => {
      this.loadData();
    })
  }

  //set password reset link to user email
  forgotPassword(element): void {
    const dialogRef = this.dialog.open(ForgotPasswordDialogComponent, {data: {user: element}, height: '288px', width: '390px', disableClose: true});
    dialogRef.afterClosed().subscribe(() => {
      this.loadData();
    }) 
  }
}

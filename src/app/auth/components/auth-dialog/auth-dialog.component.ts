import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.scss']
})
export class AuthDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AuthDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  closeDialog() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}

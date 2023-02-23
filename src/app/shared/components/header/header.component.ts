import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {AuthDialogComponent} from '../../../auth/components/auth-dialog/auth-dialog.component';
import {AuthService} from '../../services/auth.service';
import {AlertService} from '../../services/alert.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuthenticated: boolean;
  isActive: boolean;

  constructor(
    public dialog: MatDialog,
    public auth: AuthService,
    private alert: AlertService
  ) {
  }

  openDialog() {
    let dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(AuthDialogComponent, dialogConfig);

  }

  ngOnInit(): void {
    this.isAuthenticated = this.auth.isAuthenticated();
  }

  logout() {
    this.auth.logout();
    this.isAuthenticated =  false;
    this.alert.warning('Вы вышли из системы');
  }

  onToggle() {
    this.isActive = !this.isActive;
  }

  onClose() {
    this.isActive = false;
  }
}

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {User} from '../../auth-models';
import {AuthService} from '../../../shared/services/auth.service';
import {AlertService} from '../../../shared/services/alert.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  @Output() closeDialog: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(7)]]
  });
  isLoading = false;
  hide = true;

  constructor(
    private fb: FormBuilder,
    public auth: AuthService,
    private router: Router,
    private alert: AlertService,
  ) {
  }


  onSubmit() {
    this.isLoading = true;
    let user: User = {
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value
    };
    this.auth.login(user).subscribe(
      {
        next: () => {
          this.isLoading = false;
          this.router.navigate(['admin']);
          this.alert.success('Вход выполнен');
          this.closeDialog.emit();
        },
        error: () => {
          this.isLoading = false;
          this.alert.warning('Данные некорректны');
        }
      }
    );
  }

  ngOnInit(): void {
  }

}

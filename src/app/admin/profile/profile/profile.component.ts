import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../shared/services/auth.service';
import {ActivatedRoute,} from '@angular/router';
import {ProfileService} from '../../services/profile.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

  form: FormGroup = this.fb.group({
    email: [null, Validators.required],
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    phoneNumber: ['+7', [Validators.required, Validators.minLength(12)]],
    url: [null, Validators.pattern(this.reg)],
  });

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private profileService: ProfileService
  ) {
  }

  ngOnInit(): void {
    this.form.get('email').patchValue(this.auth.userEmail);
  }

  currentNumber() {
    if (this.form.get('phoneNumber').value?.length < 2) {
      this.form.get('phoneNumber').patchValue('+7');
    }
  }

  onSubmit() {
    const profile = {
      email: this.form.get('email').value,
      firsName: this.form.get('firstName').value,
      lastName: this.form.get('lastName').value,
      phoneNumber: this.form.get('phoneNumber').value,
      url: this.form.get('url').value,
    };
    this.profileService.addInfo(profile);
  }
}

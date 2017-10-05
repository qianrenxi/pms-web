import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'pms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  err;

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
      rememberMe: [false]
    });
  }

  _submitForm() {
    for (const i of Object.keys(this.loginForm.controls)) {
      this.loginForm.controls[ i ].markAsDirty();
    }

    if (this.loginForm.valid) {
      this.login(this.loginForm.value);
    }
  }

  login(data: {username: string, password: string, rememberMe: boolean}) {
    this.err = null;
    this.authService.login(data.username, data.password, data.rememberMe).subscribe(
      ok => {
        this.router.navigate(['/']);
      },
      err => this.err = err
    );
  }

  devLogin() {
    this.loginForm.controls['username'].setValue('yintao');
    this.loginForm.controls['password'].setValue('yintao');
    this.loginForm.controls['rememberMe'].setValue(true);

    this._submitForm();
  }
}

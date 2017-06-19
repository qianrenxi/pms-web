import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../entity/user';
import { AccountService } from '../../service/account.service';

@Component({
  // selector: 'pms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User;
  error: string;

  constructor(
      private accountService: AccountService,
      private route: ActivatedRoute,
      private router: Router) {
    this.user = new User();
  }

  ngOnInit() {
  }

  login() {
    let username = this.user.username;
    let passwd = this.user.password;
    this.accountService.login(username, passwd).subscribe(
      user => {
        this.goHome();
      },
      error => this.error = error
    );
  }

  guest() {
    this.user.username = 'guest';
    this.user.password = 'guestpwd';

    this.login();
  }

  goHome() {
    // Error let pathFromRoot = this.route.pathFromRoot;
    this.router.navigate(['/']);
  }
}

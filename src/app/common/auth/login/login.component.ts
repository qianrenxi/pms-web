import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// import { AccountService } from '../../service/account.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'spk-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: {username?: string, password?: string} = {};
  error: string;


  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    let username = this.user.username;
    let passwd = this.user.password;
    this.authService.login().subscribe(
      isLoggedIn => {
        // if (isLoggedIn) {
          this.goHome();
        // } else {
        //  this.error = '登录失败！';
        // }
      },
      error => this.error = error
    );
  }

  supperuser() {
    this.user.username = 'system';
    this.user.password = '888888';

    // 改为在服务端做虚拟登录，客户端不再传密码
    this.login();
  }

  goHome() {
    // Error let pathFromRoot = this.route.pathFromRoot;
    this.router.navigateByUrl('/');
  }

  guest() {
  }
}

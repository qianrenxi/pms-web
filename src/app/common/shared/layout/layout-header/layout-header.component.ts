import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'pms-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.scss']
})
export class LayoutHeaderComponent implements OnInit {

  user;

  constructor(private authServer: AuthService, private router: Router) { }

  ngOnInit() {
    this.authServer.getCurrentUser().subscribe(
      user => {
        this.user = user;
      }
    );
  }

  logout() {
    this.authServer.logout().subscribe(
      ok => {
        this.router.navigate(['/login']);
      }
    );
  }

}

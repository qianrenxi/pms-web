import { Component, OnInit } from '@angular/core';
import { User } from '../../../../entity/user';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../service/user.service';
import { CuiLayer } from 'consoleui';

@Component({
  selector: 'pms-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  user = new User();
  err;

  constructor(private router: Router, private route: ActivatedRoute,
      private userService: UserService, private layer: CuiLayer) { }

  ngOnInit() {
  }

  onSubmit(user: User) {
    this.userService.create(user).subscribe(
      u => {
        this.layer.msg('保存成功');
        this.toList();
      },
      e => this.err = e
    );
  }

  toList() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}

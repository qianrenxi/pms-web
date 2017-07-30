import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../../../entity/user';

@Component({
  selector: 'pms-user-select',
  templateUrl: './user-select.component.html',
  styleUrls: ['./user-select.component.scss']
})
export class UserSelectComponent implements OnInit {
  users: User[];
  user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  loadData(event) {
    if (!event.query) {
      return;
    }

    this.userService.getAllOfPage({username: event.query}).subscribe(
      u => this.users = u.content
    );
  }

}

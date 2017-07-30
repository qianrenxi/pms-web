import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../../../entity/user';
import { CuiLayer } from 'consoleui';
import { Pagination } from '../../../../common/entity/pagination';

@Component({
  selector: 'pms-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: Pagination<User>;
  searchText: string;
  err;

  constructor(private userService: UserService, private layer: CuiLayer) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.userService.getAllOfPage({searchText: this.searchText}).subscribe(
      users => this.users = users,
      err => this.err = err
    );
  }

  delete(id) {
    let ids = id ? [id] : [];

    if (!ids) {
      this.layer.msg('请选择要删除的用户');
      return;
    }

    this.layer.confirm('确认要删除选择的用户吗？', () => {
      this.userService.delete(ids).subscribe(
        () => {
          this.layer.msg('删除成功');
          this.loadData();
        },
        () => {
          this.layer.msg('删除失败');
        }
      );
    });
  }
}

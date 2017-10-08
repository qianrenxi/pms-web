import { TaskApiService } from 'app/common/api';
import { Task } from './../../common/entity/task';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TaskDetailResolver implements Resolve<Task> {

    constructor(private taskApi: TaskApiService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Task> {
        let taskId = route.paramMap.get('taskId');
        let projectId = route.paramMap.get('projectId');

        if (taskId) {
            return this.taskApi.getOne(taskId);
        } else {
            if (projectId) {
                this.router.navigateByUrl(`/project/${projectId}/task`);
            } else {
                this.router.navigateByUrl('/project');
            }
            return Observable.of(null);
        }
    }

}
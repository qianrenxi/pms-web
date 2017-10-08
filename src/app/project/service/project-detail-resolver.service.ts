import { ProjectApiService } from './../../common/api/project-api.service';
import { Project } from 'app/common/entity';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProjectDetailResolver implements Resolve<Project> {

    constructor(private router: Router, private projectApi: ProjectApiService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Project> {
        let projectId = route.paramMap.get('projectId');

        if (projectId) {
            return this.projectApi.getOne(projectId);
        } else {
            this.router.navigateByUrl('/project/list');
            return Observable.of(null);
        }
    }
}

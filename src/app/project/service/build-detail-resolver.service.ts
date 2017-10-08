import { BuildApiService } from 'app/common/api';
import { Build } from 'app/common/entity';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BuildDetailResolver implements Resolve<Build> {
    constructor(private router: Router, private buildApi: BuildApiService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Build> {
        let buildId = route.paramMap.get("buildId");
        let projectId = route.paramMap.get("projectId");

        if (buildId) {
            return this.buildApi.getOne(buildId);
        } else {
            if (projectId) {
                this.router.navigateByUrl(`/project/${projectId}/build`);
            } else {
                this.router.navigateByUrl('/project');
            }
            return Observable.of(null);
        }
    }

}

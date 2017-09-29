import { NgModule } from '@angular/core';
import { ProductApiService } from './product-api.service';
import { ProjectApiService } from './project-api.service';
import { UserApiService } from './user-api.service';

const APIS = [
    ProductApiService,
    ProjectApiService,
    UserApiService
];

@NgModule({
    imports: [],
    exports: [],
    providers: [...APIS],
})
export class ApiProvidorModule { }

import { AttributeApiService } from './attribute-api.service';
import { PlanApiService } from './plan-api.service';
import { RequirementApiService } from './requirement-api.service';
import { ModuleApiService } from './module-api.service';
import { NgModule } from '@angular/core';
import { ProductApiService } from './product-api.service';
import { ProjectApiService } from './project-api.service';
import { UserApiService } from './user-api.service';

const APIS = [
    AttributeApiService,
    ProductApiService,
    ProjectApiService,
    UserApiService,
    ModuleApiService,
    RequirementApiService,
    PlanApiService,
];

@NgModule({
    imports: [],
    exports: [],
    providers: [...APIS],
})
export class ApiProvidorModule { }

import { DocumentApiService } from './document-api.service';
import { DocLibApiService } from './doc-lib-api.service';
import { TestTaskApiService } from './test-task-api.service';
import { TestSuiteApiService } from './test-suite-api.service';
import { TestResultApiService } from './test-result-api.service';
import { TestCaseApiService } from './test-case-api.service';
import { IssueApiService } from './issue-api.service';
import { BuildApiService } from './build-api.service';
import { TaskApiService } from './task-api.service';
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
    BuildApiService,
    ProductApiService,
    ProjectApiService,
    UserApiService,
    ModuleApiService,
    RequirementApiService,
    PlanApiService,
    TaskApiService,
    IssueApiService,
    TestCaseApiService,
    TestResultApiService,
    TestSuiteApiService,
    TestTaskApiService,
    DocLibApiService,
    DocumentApiService,
];

@NgModule({
    imports: [],
    exports: [],
    providers: [...APIS],
})
export class ApiProvidorModule { }

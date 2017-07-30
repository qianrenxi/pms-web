import { NgModule } from '@angular/core';
import { SpkHttpModule } from './http/spk-http.module';
import { HttpProxy } from './utils/http-utils';

const PMS_COMMON_MODULES = [
    SpkHttpModule
];

@NgModule({
    imports: [...PMS_COMMON_MODULES],
    exports: [...PMS_COMMON_MODULES],
    declarations: [],
    providers: [HttpProxy],
})
export class PmsCommonModule { }

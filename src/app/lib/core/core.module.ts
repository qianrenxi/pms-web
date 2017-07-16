import { NgModule } from '@angular/core';
import { ObjectPathPipe } from './pipes/object-path.pipe';
import { DomHandler } from './dom/dom-handler';

@NgModule({
    imports: [],
    exports: [ObjectPathPipe],
    declarations: [ObjectPathPipe],
    providers: [DomHandler],
})
export class CuiCoreModule { }

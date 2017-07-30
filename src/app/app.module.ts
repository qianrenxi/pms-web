import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import './mock';
import { LayoutsModule } from './layouts/layouts.module';
import { AccountModule } from './account/account.module';
import { ErrorModule } from './error/error.module';
import { APP_CONTEXT_PROVIDER } from './app-context';
import { PmsCommonModule } from './common/pms-common.module';
import { CuiModule } from 'consoleui';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CuiModule,
    PmsCommonModule,
    LayoutsModule,
    AccountModule,
    ErrorModule,
    AppRoutingModule,
  ],
  providers: [APP_CONTEXT_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }

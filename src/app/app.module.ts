import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warningAlert/warningAlert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { AssignmentComponent } from './assignment/assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    AssignmentComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

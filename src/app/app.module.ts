import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectsComponent } from './projects/projects.component';
import { MatTableModule } from '@angular/material/table';
import { LimitToPipe } from './limit-to.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    LimitToPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

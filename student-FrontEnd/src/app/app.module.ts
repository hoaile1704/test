import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CrudServiceService} from '../services/crud-service.service'
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { StudentComponent } from './views/student/student.component';
import { TeacherComponent } from './views/teacher/teacher.component';
import { ContactComponent } from './views/contact/contact.component';
import { CatalogComponent } from './views/catalog/catalog.component';
import { IntakeComponent } from './views/intake/intake.component';
import { SemesterComponent } from './views/semester/semester.component';
import { AcademicYearComponent } from './views/academic-year/academic-year.component';

// ngx-bootstrap
import { ModalModule } from 'ngx-bootstrap/modal';
import { MajorComponent } from './views/major/major.component';
import { DocumentStudentComponent } from './views/document-student/document-student.component';
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    NgbModule.forRoot(),
    ModalModule.forRoot(),
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    StudentComponent,
    TeacherComponent,
    ContactComponent,
    CatalogComponent,
    IntakeComponent,
    SemesterComponent,
    AcademicYearComponent,
    MajorComponent,
    DocumentStudentComponent,
  ],
  providers: 
  [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
    
  },
  CrudServiceService
],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


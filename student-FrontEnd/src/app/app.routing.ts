import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { StudentComponent } from './views/student/student.component';
import { TeacherComponent } from './views/teacher/teacher.component';
import { ContactComponent } from './views/contact/contact.component';
import { CatalogComponent } from './views/catalog/catalog.component';
import { IntakeComponent } from './views/intake/intake.component';
import { SemesterComponent } from './views/semester/semester.component';
import { AcademicYearComponent } from './views/academic-year/academic-year.component';
// import { ContactComponent } from './views/contact/contact.component';

import { MajorComponent } from './views/major/major.component';
import { DocumentStudentComponent } from './views/document-student/document-student.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'document-student',
        component: DocumentStudentComponent
      },
      {
        path: 'major',
        component: MajorComponent
      },
      {
        path: 'academic-year',
        component: AcademicYearComponent
      },
      {
        path: 'semester',
        component: SemesterComponent
      },
      {
        path: 'intake',
        component: IntakeComponent
      },
      {
        path: 'catalog',
        component: CatalogComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'teacher',
        component: TeacherComponent
      },
      {
        path: 'student',
        component: StudentComponent
      },
      {
        path: 'base',
        loadChildren: './views/base/base.module#BaseModule'
      },
      {
        path: 'buttons',
        loadChildren: './views/buttons/buttons.module#ButtonsModule'
      },
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'icons',
        loadChildren: './views/icons/icons.module#IconsModule'
      },
      {
        path: 'notifications',
        loadChildren: './views/notifications/notifications.module#NotificationsModule'
      },
      {
        path: 'theme',
        loadChildren: './views/theme/theme.module#ThemeModule'
      },
      {
        path: 'widgets',
        loadChildren: './views/widgets/widgets.module#WidgetsModule'
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

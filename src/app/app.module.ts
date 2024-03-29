import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectComponent } from './pages/project/project.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactService } from './service/contact.service';
import { SafePipe } from './core/pipe/safepipe.service';
import { ResumeComponent } from './pages/resume/resume.component';

import { AppRoutingModule } from './app.routing';
import { ResumeService } from './service/resume.service';
import { ReactiveFormsModule }    from '@angular/forms';

// used to create fake backend
//import { fakeBackendProvider } from './helpers';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { routing } from './app.routing';

import { JwtInterceptor, ErrorInterceptor } from './helpers';
import { UserAreaComponent } from './pages/userarea';
import { LoginComponent } from './pages/login';
import { RegisterComponent } from './pages/register';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SatPopoverModule } from '@ncstate/sat-popover';

import { EditExample } from './shared/components/popover/edit-example/edit-example.component';
import { EditForm } from './shared/components/popover/edit-example/edit-form.component';
import { MenuExample } from './shared/components/popover/profile/profile-popover.component';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';

import {IvyCarouselModule} from 'angular-responsive-carousel';
import { BaseUrlInterceptor } from './helpers/http-interceptor';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    routing,
    SatPopoverModule,
    PagesModule,
    SharedModule,
    IvyCarouselModule
  ],
  declarations: [
    AppComponent,
    ProjectsComponent,
    HomeComponent,
    ProjectComponent,
    ContactComponent,
    SafePipe,
    ResumeComponent,
    UserAreaComponent,
    LoginComponent,
    RegisterComponent,
    EditExample,
    EditForm,
    MenuExample,
    ],
  providers: [ 
    ContactService, 
    ResumeService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true },
    { provide: "BASE_API_URL", useValue: "https://api.rickiekarp.net" }

    // provider used to create fake backend
     //fakeBackendProvider 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

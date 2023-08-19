import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { HttpErrorInterceptorProvider } from './core/interceptors/http.interceptor';
import { DocumentComponent } from './document/document.component';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { DocumentDetailComponent } from './document-detail/document-detail.component';
import { FooterComponent } from './utils/components/footer/footer.component';
import { HeaderComponent } from './utils/components/header/header.component';
import { SidebarComponent } from './utils/components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FileInputDirective } from './utils/directives/file-input.directive';

@NgModule({
  declarations: [
    AppComponent,
    DocumentComponent,
    SigninComponent,
    DocumentDetailComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    FileInputDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    ModalModule.forRoot()
  ],
  providers: [
    HttpErrorInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

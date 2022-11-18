import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RecommendedProductsComponent } from './components/recommended-products/recommended-products.component'
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { AddEditUserComponent } from './dialogs/add-edit-user/add-edit-user.component';
import { LoginComponent } from './dialogs/login/login.component';
import { ProfileImgComponent } from './dialogs/profile-img/profile-img.component';
import { HomeComponent } from './components/home/home.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    RecommendedProductsComponent,
    HeaderComponent,
    AddEditUserComponent,
    LoginComponent,
    ProfileImgComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    MatToolbarModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

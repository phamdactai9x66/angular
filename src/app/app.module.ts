import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';

import { Routes, RouterModule } from '@angular/router';

import { NgxPaginationModule } from 'ngx-pagination';
import { AddproductComponent } from './addproduct/addproduct.component';

const routerPage: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'product/add',
    component: AddproductComponent,
  },
  {
    path: 'product/:id',
    component: EditProductComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditProductComponent,
    AddproductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule,
    RouterModule.forRoot(routerPage),
    // AngularFireModule.initializeApp(firebaseConfig, 'cloud'),
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent], //kickstart the app component
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberComponent } from './member/member.component';
import { ProductComponent } from './product/product.component';
import { ListComponent } from './list/list.component';
import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    ProductComponent,
    ListComponent,
    AddproductComponent,
    UpdateproductComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

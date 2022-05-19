import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewDealComponent } from './new-deal/new-deal.component';
import { WebBannerComponent } from './web-banner/web-banner.component';
import { MyDealsComponent } from './my-deals/my-deals.component';
import { MyInventoryComponent } from './my-inventory/my-inventory.component';
import { BillingComponent } from './billing/billing.component';
import { PageBodyComponent } from './page-body/page-body.component';

@NgModule({
  declarations: [
    AppComponent,
    NewDealComponent,
    WebBannerComponent,
    MyDealsComponent,
    MyInventoryComponent,
    BillingComponent,
    PageBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

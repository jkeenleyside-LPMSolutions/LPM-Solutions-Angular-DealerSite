import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingComponent } from './billing/billing.component';
import { MyDealsComponent } from './my-deals/my-deals.component';
import { MyInventoryComponent } from './my-inventory/my-inventory.component';
import { NewDealComponent } from './new-deal/new-deal.component';

const routes: Routes = [
  {
    path:"myDeals",
    component: MyDealsComponent
  },
  {
    path:"myInventory",
    component: MyInventoryComponent
  },
  {
    path:"billing",
    component: BillingComponent
  },
  {
    path:"newDeal",
    component: NewDealComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

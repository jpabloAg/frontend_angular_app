import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCreditComponent } from './components/create-credit/create-credit.component';
import { CreditComponent } from './components/credit/credit.component';
import { CustomerComponent } from './components/customer/customer.component';
import { EditComponent } from './components/edit/edit.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'customer/:id', component: CustomerComponent },
  { path: 'credit/:id', component: CreditComponent },
  { path: 'create_credit/:id', component: CreateCreditComponent },
  { path: 'edit_customer/:id', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

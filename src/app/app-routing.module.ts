import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateInvoiceComponent } from './invoice/create-invoice/create-invoice.component';
import { DeleteInvoiceComponent } from './invoice/delete-invoice/delete-invoice.component';
import { DetailInvoiceComponent } from './invoice/detail-invoice/detail-invoice.component';
import { ListeinvoicesComponent } from './invoice/listeinvoices/listeinvoices.component';
import { UpdateInvoiceComponent } from './invoice/update-invoice/update-invoice.component';

const routes: Routes = [

  { path: "invoices", component: ListeinvoicesComponent },
  { path: "detail/:id", component: DetailInvoiceComponent },
  { path: 'remove/:id', component: DeleteInvoiceComponent },
  { path: 'update/:id', component: UpdateInvoiceComponent },

  { path: "addInvoice", component: CreateInvoiceComponent },
  { path: '**', redirectTo: 'invoices', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

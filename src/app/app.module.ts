import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeinvoicesComponent } from './invoice/listeinvoices/listeinvoices.component';
import { DetailInvoiceComponent } from './invoice/detail-invoice/detail-invoice.component';
import { CreateInvoiceComponent } from './invoice/create-invoice/create-invoice.component';
import { FormsModule } from '@angular/forms';
import { DeleteInvoiceComponent } from './invoice/delete-invoice/delete-invoice.component';
import { UpdateInvoiceComponent } from './invoice/update-invoice/update-invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeinvoicesComponent,
    DetailInvoiceComponent,
    CreateInvoiceComponent,
    DeleteInvoiceComponent,
    UpdateInvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

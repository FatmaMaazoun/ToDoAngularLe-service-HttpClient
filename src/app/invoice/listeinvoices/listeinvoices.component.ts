import { Component, OnInit } from '@angular/core';
import { InvoiceServiceService } from 'src/app/service/invoice-service.service';

@Component({
  selector: 'app-listeinvoices',
  templateUrl: './listeinvoices.component.html',
  styleUrls: ['./listeinvoices.component.css']
})
export class ListeinvoicesComponent implements OnInit {
  invoices: any;
  constructor(private serviceinvoice: InvoiceServiceService) { }

  ngOnInit(): void {
    this.serviceinvoice.listInvoices().subscribe(
      (result) => {
        this.invoices = result;
      }
    );

  }

}

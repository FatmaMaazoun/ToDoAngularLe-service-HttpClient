import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Invoice } from 'src/app/model/Invoice';
import { InvoiceServiceService } from 'src/app/service/invoice-service.service';

@Component({
  selector: 'app-detail-invoice',
  templateUrl: './detail-invoice.component.html',
  styleUrls: ['./detail-invoice.component.css']
})
export class DetailInvoiceComponent implements OnInit {
  id: any;
  invoice = new Invoice;
  constructor(private activatedRouter: ActivatedRoute, private invoiceservice: InvoiceServiceService) { }

  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.params['id'];
    this.invoiceservice.getInvoiceByID(this.id).subscribe(
      (item) => {
        this.invoice = item;
        console.log("hellllllo " + this.invoice.Status);
      }
    );

  }




}

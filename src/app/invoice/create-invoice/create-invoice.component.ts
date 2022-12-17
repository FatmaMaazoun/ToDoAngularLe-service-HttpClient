import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Invoice } from 'src/app/model/Invoice';
import { InvoiceServiceService } from 'src/app/service/invoice-service.service';

@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.css']
})
export class CreateInvoiceComponent implements OnInit {

  constructor(private serviceInvoice:InvoiceServiceService,private route:Router) { }

  ngOnInit(): void {
  }
  
  addinvoice(f:any)
  {
    console.log(f);
    
    this.serviceInvoice.addInvoice(f).subscribe();
    this.route.navigate(['invoices']);
  }
}

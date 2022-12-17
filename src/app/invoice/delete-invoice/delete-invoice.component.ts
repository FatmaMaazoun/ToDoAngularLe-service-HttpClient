import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { InvoiceServiceService } from 'src/app/service/invoice-service.service';

@Component({
  selector: 'app-delete-invoice',
  templateUrl: './delete-invoice.component.html',
  styleUrls: ['./delete-invoice.component.css']
})
export class DeleteInvoiceComponent implements OnInit {
id:any
  constructor(private invoiceservice:InvoiceServiceService,private ac:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id = this.ac.snapshot.params['id']
    this.invoiceservice.removeInvoice(this.id).subscribe(
      () => {
        // partie success mta methode 
        this.router.navigate(['invoices']); // ikhalina dima on respecte spa 
      }

    );
  }
}
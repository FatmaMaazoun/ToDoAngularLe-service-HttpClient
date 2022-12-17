import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice } from 'src/app/model/Invoice';
import { InvoiceServiceService } from 'src/app/service/invoice-service.service';

@Component({
  selector: 'app-update-invoice',
  templateUrl: './update-invoice.component.html',
  styleUrls: ['./update-invoice.component.css']
})
export class UpdateInvoiceComponent implements OnInit {
invoice=new Invoice;
id:any;
  constructor(private service: InvoiceServiceService, private aroute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id=this.service.getInvoiceByID(this.aroute.snapshot.params['id']).subscribe(
      (data) => {
        this.invoice = data;
        console.log(this.invoice);
      }
    );
  }

  updateinvoice(f:any){
    this.service.updateInvoice(this.id,f).subscribe();
    this.router.navigate(['invoices']);
  }

}

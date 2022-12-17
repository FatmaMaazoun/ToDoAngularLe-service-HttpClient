import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Invoice } from '../model/Invoice';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InvoiceServiceService {
  url = environment.baseUrl;

  constructor(private http: HttpClient) { }



  listInvoices(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(this.url + 'invoices');
  }
  getInvoiceByID(id: any): Observable<Invoice> {
    return this.http.get<Invoice>(this.url + 'invoices/' + id)
  }
  addInvoice(data: any) {
    return this.http.post(this.url + 'invoices', data);
  }
  removeInvoice(id: any) {
    return this.http.delete(this.url + 'invoices/' + id)
  }
  updateInvoice(id: any, data: any) {
    return this.http.put(this.url + 'invoices/' + id, data)
  }
}


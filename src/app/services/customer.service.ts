import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private api = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  getCustomer(id) {
    const path = this.api + '/find/' + id;
    return this.http.get(path);
  }

  updateCustomer(customer, id) {
    const path = this.api + '/update/' + id ;
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post(path, customer, options);
  }

  updateCustomerByRabbit() {
    const path = this.api + '/updateRabbit';
    return this.http.post(path, {});
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CreditService {

  private api = "http://localhost:3001";
  constructor(private http: HttpClient) { }

  getCard(id) {
    const path = this.api + '/find/' + id;
    return this.http.get(path);
  }

  saveCreditCard(card) {
    const path = this.api + '/add/';
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post(path, card, options);
  }

}

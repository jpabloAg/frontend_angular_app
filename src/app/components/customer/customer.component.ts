import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  public customer:any;
  constructor(private _customer:CustomerService, private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe( param => {
      this._customer.getCustomer(param.id).subscribe(
        response => {
          this.customer = response;
          console.log(response);
        }
      )
    });
  }

}

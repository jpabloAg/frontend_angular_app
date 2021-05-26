import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreditService } from '../../services/credit.service';

import { CustomerService } from '../../services/customer.service';
interface Credit{
  id?:string,
  name?:string,
  type?:string,
  balance?:number,
  owner?:number,
  active?:number,
  img?:string
}

@Component({
  selector: 'app-create-credit',
  templateUrl: './create-credit.component.html',
  styleUrls: ['./create-credit.component.css']
})
export class CreateCreditComponent implements OnInit {
  public credit_card:Credit = {}
  public options:Credit[] = []
  constructor(private _credit:CreditService, private _customer:CustomerService, private _route:ActivatedRoute, private _router:Router) { 
    
  }

  ngOnInit(): void {
    this._route.params.subscribe( param => {
      this.options = [
        {
          name:'mastercad',
          type:'tarjeta de credito',
          balance:500000,
          owner: param.id,
          active: 1,
          img: '../../../assets/mini.jpg'
        },
        {
          name:'visa clásica',
          type:'tarjeta de credito',
          balance:4200000,
          owner: param.id,
          active: 1,
          img: '../../../assets/red.jpg'
        },
        {
          name:'mastercard premium',
          type:'tarjeta de credito',
          balance:700000,
          owner: param.id,
          active: 1,
          img: '../../../assets/blue.jpg'
        },
        {
          name:'mastercard gold',
          type:'tarjeta de credito',
          balance:7200000,
          owner: param.id,
          active: 1,
          img: '../../../assets/gold.jpg'
        }
      ]
    })
  }
  subscribir(i){
    console.log(this.options[i]);
    this._credit.saveCreditCard(this.options[i]).subscribe(
      response => {
        alert('Felicidades por su subscripción a la tarjeta' + this.options[i].name);
      }
    );

    this._customer.updateCustomerByRabbit().subscribe(
      response => {
        this._router.navigate(['/customer', this.options[i].owner]);
      }
    )
    
  }

}

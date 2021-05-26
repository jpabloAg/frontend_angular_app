import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public customer:any;
  public id:any;
  constructor(private _customer:CustomerService, private _route:ActivatedRoute, private _router:Router) { }

  ngOnInit(): void {
    this._route.params.subscribe( param => {
      this.id = param.id;
      this._customer.getCustomer(param.id).subscribe(
        response => {
          this.customer = response;
        }
      )
    });
  }

  public update(){
    console.log(this.id);
    this._customer.updateCustomer(this.customer, this.id).subscribe(
      response => {
        console.log('objeto actualizado');
        console.log(response);
        alert("Objeto actualizado");
        this._router.navigate(['/customer', this.customer.id]);
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreditService } from '../../services/credit.service';
@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit {
  public card:any;
  constructor(private _credit:CreditService, private _route:ActivatedRoute, private _router:Router) { }

  ngOnInit(): void {
    this._route.params.subscribe( param => {
      this._credit.getCard(param.id).subscribe(
        response => {
          this.card = response;
          console.log(this.card);
        }
      )
    })
  }

}

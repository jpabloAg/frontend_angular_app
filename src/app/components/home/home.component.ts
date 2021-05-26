import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public id_owner:any;
  constructor() { }

  ngOnInit(): void {
  }

  up(){
    alert(this.id_owner);
  }

}

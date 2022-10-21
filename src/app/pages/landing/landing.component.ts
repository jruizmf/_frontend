import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  images:Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    this.images= ['./../../../assets/img/plato_comida_japonesa.jpg', './../../../assets/img/sushi-comida.jpg', './../../../assets/img/tonkatsu-comida.jpg']
  }
}

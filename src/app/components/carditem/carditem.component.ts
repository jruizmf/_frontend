import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carditem',
  templateUrl: './carditem.component.html',
  styleUrls: ['./carditem.component.scss']
})
export class CarditemComponent implements OnInit {
  @Input()
  order: string = "";
  @Input()
  title: string = "";
  @Input()
  content: string = "";
  @Input()
  link: string = "";
  @Input()
  icon: string = "";
  @Input()
  type:number = 0
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateTo(route:any){
    console.log(route)
    this.router.navigate([route]);
  }
}

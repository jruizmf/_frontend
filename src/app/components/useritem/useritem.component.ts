import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-useritem',
  templateUrl: './useritem.component.html',
  styleUrls: ['./useritem.component.scss']
})
export class UseritemComponent implements OnInit {

  photo:string="./../../../assets/photo.png"
  name:string = "Juan Perez";
  organization:string = "Baakot";
  constructor() { }

  ngOnInit(): void {
  }

}

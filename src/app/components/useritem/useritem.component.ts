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

  attribute:string = "none";
  constructor() { }

  ngOnInit(): void {
  }

  public changeAttribute(): void{
    alert("afg")
    if(this.attribute == "none"){
      this.attribute = "flex"
    } else{
      this.attribute == "none"
    }
  }
}

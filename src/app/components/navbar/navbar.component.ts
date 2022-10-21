import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { Auth } from 'src/app/services/auth';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: Auth,public router: Router ) { }
  logged:boolean = false;
  faGear: any = faGear;
  ngOnInit(): void {
    this.logged = false
    this.logged = this.authService.isLoggedIn
    console.log(this.authService.isLoggedIn)
  }
  
}

import { Component, OnInit } from '@angular/core';

import { Auth } from 'src/app/services/auth';
import AuthDto from 'src/app/Model/Dto/AuthDto';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading: boolean = true;
  constructor(public auth: Auth, private router: Router, private alertService: AlertService,) { }
  
  ngOnInit(): void {
    setTimeout(() =>{
      this.loading= false
    }, 1000)
   
  }
  onClickSubmit(data: AuthDto) {
    this.auth.signIn(data);
  }
}

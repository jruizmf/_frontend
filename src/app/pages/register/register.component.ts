import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import User from 'src/app/Model/User';
import  {UserService} from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public user: UserService, private router: Router) { }
  
  ngOnInit(): void {
  }
  onClickSubmit(data: any): void {
    let data_ = this.validateForm(data);
    if(data_.status){
      console.log(data_)
      this.user.create(data).subscribe((res: any) => {
        console.log(res)
        if (res) {
          alert(data_.message);
          this.router.navigate(['/login']);
        }
      });
    } else {
      alert(data_.message)
    }
  }
  validateForm(data: any): any{
    let _status: boolean = true;
    let _data:any ={};
    let _message: string = "";
    if(data.password == data.confirmPassword){
      delete data.confirmPassword;
      data.status = true;
      data.organization_id = 1;
      _data = data;
      _message = "Validation success, Registered.";
      _status = true;
      
    } else{
      _message = "Validation Failed, Please check the form.";
      _status = false;
    }
    return {
      data: _data,
      message: _message,
      status: _status
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  message: any;
  constructor(
    public router: Router, 
    private route: ActivatedRoute, 
    private alertService: AlertService,
 ) { }
  ngOnInit() {
    console.log("message.type")
    //this function waits for a message from alert service, it gets 
    //triggered when we call this from any other component
    this.alertService.getMessage().subscribe((message:any) => {
      alert("suscribing")
        this.message = message;
    });

  }
}

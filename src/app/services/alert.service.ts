import { Injectable } from '@angular/core'; 
import { Router, NavigationStart } from '@angular/router'; 
import { Observable, Subject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class AlertService {
     private subject = new Subject<any>();
     constructor(){}

     confirm(message: string,siFn:()=>void,noFn:()=>void){
      
       this.setConfirmation(message,siFn,noFn);
     }

     setConfirmation(message: string,siFn:()=>void,noFn:()=>void) {
       let that = this;
       this.subject.next({ type: "confirm",
                   text: message,
                   siFn:
                   function(){
                     alert("yes")
                    this.subject.next(); //this will close the modal
                       siFn();
                   },
                   noFn:function(){
                    this.subject.next();
                       noFn();
                   }
                });

            }

     getMessage(): Observable<any> {
        return this.subject.asObservable();
     }
  }
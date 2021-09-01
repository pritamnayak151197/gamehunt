import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  signedUp: boolean=false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  checkIfSignedUp(type:string){
    let category:string=type;
    if(this.signedUp==true && category=="free"){
       this.router.navigate(['registerforfreematch']);
    }
    else if(this.signedUp==true && category=="paid"){
       this.router.navigate(['registerforpaidmatch']);
    }
    else if(this.signedUp==true && category=="host"){
      this.router.navigate(['hostmatch']);
    }
    else{
      this.router.navigate(['signup']);
    }
  }

}

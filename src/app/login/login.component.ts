import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }
 check(m:string, n:string){
   if(m=="kunal@gmail.com"&&n=="Kunal@123") this.router.navigate(['/home']);
   else{
    alert("Please Fill correct info");
  }
 }
  ngOnInit(): void {
  }

}

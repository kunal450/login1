import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  Show(){
    // if(document.getElementById("d1").style.display=="none")
    // document.getElementById("d1").style.display=="block";
    // else 
    // document.getElementById("d1").style.display=="none";
   
  }
  ngOnInit(): void {
  }

}

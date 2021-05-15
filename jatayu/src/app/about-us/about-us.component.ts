import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  public projectCount : number;
  public customerCount : number;
  public hoursCount : number;
  
  constructor() {
    
   }

  ngOnInit(): void {
    $(document).ready(function($){
      $('.counter').counterUp({
      delay: 10,
      time: 1000
      });
    });
  }
  

}


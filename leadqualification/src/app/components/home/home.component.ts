import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slide:boolean = false;

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  navigate(){
    this.slide = true;
    setTimeout(() => {
      this.router.navigate(['sign-up'])
    }, 1000);
  }
}

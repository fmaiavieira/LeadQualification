import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slide = false;

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  navigate(): any {
    this.slide = true;
    setTimeout(() => {
      this.router.navigate(['sign-up']);
    }, 1000);
  }
}

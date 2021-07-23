import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  value: any = '';
  @Input() public type: string = '';
  @Input() public placeholder: string = '';
  @Input() public name: string = '';

  constructor() { }

  ngOnInit(): void {
  }


}

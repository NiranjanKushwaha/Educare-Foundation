import { Component, Input, OnInit } from '@angular/core';
// import { CommonConstant } from '../constants/common.constants';

@Component({
  selector: 'app-volunteers-card',
  templateUrl: './volunteers-card.component.html',
  styleUrls: ['./volunteers-card.component.css'],
})
export class VolunteersCardComponent implements OnInit {
  @Input() data: any;
  constructor() {}

  ngOnInit(): void {
    console.log('data result', this.data);
  }
}

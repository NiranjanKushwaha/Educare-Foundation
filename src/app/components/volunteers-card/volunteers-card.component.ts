import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-volunteers-card',
  templateUrl: './volunteers-card.component.html',
  styleUrls: ['./volunteers-card.component.css'],
})
export class VolunteersCardComponent implements OnInit {
  @Input() data: any;
  constructor() {}

  ngOnInit(): void {}
}

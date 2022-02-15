import { Component, OnInit } from '@angular/core';
import { CommonConstant } from '../constants/common.constants';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  ngoName: string = CommonConstant.ngoName;

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { CommonConstant } from '../constants/common.constants';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  logo = '../../../assets/images/ngo_logo.jpg';
  ngoName = CommonConstant.ngoName;
  constructor() {}

  ngOnInit(): void {}
}

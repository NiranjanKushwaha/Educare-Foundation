import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { CommonConstant } from '../constants/common.constants';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  ngoName: string = CommonConstant.ngoName;

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {}
  scrollToVolunteer(id: any) {
    this.commonService.gotoVolunteer.next(true);
  }
}

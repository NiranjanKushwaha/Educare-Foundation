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

  constructor(private commonService: CommonService) {
    this.commonService.hideVolunteer.subscribe((res) => {
      if (res) {
        this.isHomepage = false;
      } else {
        let urlSplit = location.href.split('/');
        if (urlSplit[urlSplit.length - 1]) {
          this.isHomepage = false;
        } else {
          this.isHomepage = true;
        }
      }
    });
  }

  isHomepage: boolean = true;
  ngOnInit(): void {}
  scrollToVolunteer(id: any) {
    this.commonService.gotoVolunteer.next(true);
  }
}

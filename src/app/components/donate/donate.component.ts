import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css'],
})
export class DonateComponent implements OnInit {
  constructor(private commonService: CommonService) {}
  childrenImg = '../../../assets/images/donate/children.jpeg';
  scanner = '../../../assets/images/donate/barcode.gif';
  ngOnInit(): void {
    this.commonService.hideVolunteer.next(true);
  }
}

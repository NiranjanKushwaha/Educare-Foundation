import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-child-education',
  templateUrl: './child-education.component.html',
  styleUrls: ['./child-education.component.css'],
})
export class ChildEducationComponent implements OnInit {
  @ViewChild('childEduBg') childEduBg: ElementRef;
  constructor(private commonService: CommonService) {}
  bg = '../../../assets/images/bg/childEduBg.jpg';
  ngOnInit(): void {
    this.commonService.hideVolunteer.next(true);
  }
}

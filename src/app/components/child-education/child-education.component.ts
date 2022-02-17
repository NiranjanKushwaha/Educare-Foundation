import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-child-education',
  templateUrl: './child-education.component.html',
  styleUrls: ['./child-education.component.css'],
})
export class ChildEducationComponent implements OnInit {
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.commonService.hideVolunteer.next(true);
  }
}

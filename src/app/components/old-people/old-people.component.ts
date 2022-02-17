import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
@Component({
  selector: 'app-old-people',
  templateUrl: './old-people.component.html',
  styleUrls: ['./old-people.component.css'],
})
export class OldPeopleComponent implements OnInit {
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.commonService.hideVolunteer.next(true);
  }
}

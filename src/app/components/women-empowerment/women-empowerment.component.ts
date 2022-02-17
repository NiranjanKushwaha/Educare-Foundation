import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
@Component({
  selector: 'app-women-empowerment',
  templateUrl: './women-empowerment.component.html',
  styleUrls: ['./women-empowerment.component.css'],
})
export class WomenEmpowermentComponent implements OnInit {
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.commonService.hideVolunteer.next(true);
  }
}

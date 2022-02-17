import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css'],
})
export class GallaryComponent implements OnInit {
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.commonService.hideVolunteer.next(true);
  }
}

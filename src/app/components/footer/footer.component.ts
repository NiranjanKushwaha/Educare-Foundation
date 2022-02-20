import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {}
  scrollToVolunteer(id: any) {
    this.commonService.gotoVolunteer.next(true);
  }
}

import { CommonService } from 'src/app/services/common.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonConstant } from '../constants/common.constants';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data = CommonConstant.testimonials;

  @ViewChild('volunteers') volunteers: ElementRef;
  constructor(private commonService: CommonService) {
    this.commonService.gotoVolunteer.subscribe((res) => {
      if (res) {
        this.scrollToVolunteer(this.volunteers);
      }
    });
  }
  images = [62, 83, 466, 965, 982, 1043, 738].map((n) => {
    return {
      url: `https://picsum.photos/id/${n}/900/500`,
      content: '',
    };
  });

  ngOnInit(): void {
    this.commonService.hideVolunteer.next(false);
    console.log(CommonConstant.testimonials);
  }

  scrollToVolunteer(viewChildId: any) {
    viewChildId.nativeElement.scrollIntoView();
  }
}

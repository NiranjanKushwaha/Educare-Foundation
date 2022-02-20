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

  // images = [62, 83, 466, 965, 982, 1043, 738].map((n) => {
  //   return {
  //     url: `https://picsum.photos/id/${n}/900/500`,
  //     content: '',
  //   };
  // });
  images: any = [
    {
      url: 'https://www.gkkhoj.com/wp-content/uploads/2019/08/Tulsidas-Hindi.jpg',
    },
    {
      url: 'https://img.search.brave.com/dK4pN_CnTL473yqBBfQSv4gzSllgt05hNvAfL7d5ygs/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly93d3cu/cmVsaWdpb3VzdGFs/a3MuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE3LzA4L21l/ZXJhYmFpLXBob3Rv/LmpwZw',
    },
    {
      url: 'https://wallpapercave.com/dwp1x/wp6392655.jpg',
    },
  ];

  ngOnInit(): void {
    this.commonService.hideVolunteer.next(false);
  }

  scrollToVolunteer(viewChildId: any) {
    viewChildId.nativeElement.scrollIntoView();
  }
}

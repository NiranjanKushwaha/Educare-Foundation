import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
@Component({
  selector: 'app-old-people',
  templateUrl: './old-people.component.html',
  styleUrls: ['./old-people.component.css'],
})
export class OldPeopleComponent implements OnInit {
  constructor(private commonService: CommonService) {}
  images = [
    {
      url: `https://www.omashram.org/timthumb/timthumb.php?src=https://www.omashram.org/wp-content/uploads/2015/08/banner1-1024x461.png&w=1641&h=676&zc=1`,
      content: 'Love your mother , you will never get another !!',
    },
    {
      url: `https://www.omashram.org/timthumb/timthumb.php?src=https://www.omashram.org/wp-content/uploads/2015/08/banner3-1024x461.png&w=1641&h=676&zc=1`,
      content:
        "Father's are the real heros whose buiding light shows us the way of lifes",
    },
    {
      url: `https://www.omashram.org/timthumb/timthumb.php?src=https://www.omashram.org/wp-content/uploads/2015/08/banner5-1024x461.png&w=1641&h=676&zc=1`,
      content:
        'Old people were young people even before young people were people!!',
    },
  ];
  ngOnInit(): void {
    this.commonService.hideVolunteer.next(true);
  }
}

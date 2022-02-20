import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css'],
})
export class DonateComponent implements OnInit {
  constructor(private commonService: CommonService) {}
  childrenImg =
    'https://img.search.brave.com/U78W60dyESPHOr1nbcp21lJIxfpjIZfVmhj0CetJJdY/rs:fit:362:273:1/g:ce/aHR0cHM6Ly9ybWhj/dGFtcGFiYXkub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE0/LzExL3RoYW5rcy1r/aWRzLmpwZw';
  // scanner = '../../../assets/images/donate/barcode.gif';
  scanner = '../../../assets/images/donate/realcode.jfif';

  ngOnInit(): void {
    this.commonService.hideVolunteer.next(true);
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-volunteers-card',
  templateUrl: './volunteers-card.component.html',
  styleUrls: ['./volunteers-card.component.css'],
})
export class VolunteersCardComponent implements OnInit {
  @Input() data: any;
  constructor() {}

  ngOnInit(): void {
    this.data.map((el: any) => {
      let totalWordsArr = el.about.split(' ');
      el.totalWordsArr = totalWordsArr;
      if (totalWordsArr.length > 10) {
        el.showMore = true;
        let count = 0;
        let firstTenWords = '';
        totalWordsArr.forEach((word: any) => {
          if (word && count < 10) {
            firstTenWords += word + ' ';
            count += 1;
            if (count === 10) {
              firstTenWords += '...';
            }
          }
        });
        el.firstTenWords = firstTenWords;
      } else {
        el.firstTenWords = el.about;
        el.showMore = false;
      }
    });
  }

  openLink(url: string) {
    window.open(url);
  }
}

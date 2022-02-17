import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonConstant } from '../constants/common.constants';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css'],
})
export class MoreComponent implements OnInit {
  constructor(private _Activatedroute: ActivatedRoute) {}

  profileDetails: any;
  urlParams: any;
  ngOnInit(): any {
    this._Activatedroute.paramMap.subscribe((params) => {
      this.urlParams = params;
    });

    this.profileDetails = CommonConstant.testimonials.filter(
      (el) =>
        el.id === parseInt(this.urlParams.params.id) &&
        el.name === this.urlParams.params.name
    );
    this.profileDetails = this.profileDetails[0];
  }
}

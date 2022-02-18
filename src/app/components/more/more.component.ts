import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonConstant } from '../constants/common.constants';
import { CommonService } from 'src/app/services/common.service';
@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css'],
})
export class MoreComponent implements OnInit {
  constructor(
    private _Activatedroute: ActivatedRoute,
    private commonService: CommonService
  ) {}

  profileDetails: any;
  urlParams: any;
  bg = '../../../assets/images/bg/moreBg.jpg';
  ngOnInit(): any {
    this.commonService.hideVolunteer.next(true);
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

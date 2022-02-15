import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableCarouselComponent } from './reusable-carousel/reusable-carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [ReusableCarouselComponent],
  imports: [CommonModule, NgbModule],
  exports: [ReusableCarouselComponent],
})
export class ReusableModule {}

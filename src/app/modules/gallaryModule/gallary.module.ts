import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GallaryComponent } from './gallary/gallary.component';

@NgModule({
  declarations: [GallaryComponent],
  imports: [CommonModule, NgbModule],
  exports: [GallaryComponent],
})
export class GallaryModule {}

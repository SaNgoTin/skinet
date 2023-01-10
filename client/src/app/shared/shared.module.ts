import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import { PaginationNavComponent } from './component/pagination-nav/pagination-nav.component';
import { PaginationHeaderComponent } from './component/pagination-header/pagination-header.component'



@NgModule({
  declarations: [
    PaginationNavComponent,
    PaginationHeaderComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot()
  ],
  exports: [PaginationNavComponent,PaginationHeaderComponent]
})
export class SharedModule { }

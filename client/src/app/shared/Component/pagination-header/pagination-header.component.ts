import { Component, Input } from '@angular/core';
import { ShopParams } from '../../Model/shopParam';

@Component({
  selector: 'app-pagination-header',
  templateUrl: './pagination-header.component.html',
  styleUrls: ['./pagination-header.component.scss']
})
export class PaginationHeaderComponent {
  @Input() totalItems: number;
  @Input() pageNum: number;
  @Input() pageSize: number;
  
}

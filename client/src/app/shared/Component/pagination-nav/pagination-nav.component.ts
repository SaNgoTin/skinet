import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination-nav',
  templateUrl: './pagination-nav.component.html',
  styleUrls: ['./pagination-nav.component.scss']
})
export class PaginationNavComponent {
  @Input() totalItems: number 
  @Input() pageSize:number
  @Output() pageChanged= new EventEmitter<number>();

  onToggleChange(event: any){
    this.pageChanged.emit(event.page);
  }

}

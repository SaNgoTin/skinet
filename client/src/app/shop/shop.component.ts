import { Component, ElementRef, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { IProduct } from '../shared/Model/Product';
import { IProductBrand } from '../shared/Model/ProductBrand';
import { IProductType } from '../shared/Model/productTypes';
import { ShopParams } from '../shared/Model/shopParam';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  @ViewChild('searchText') searchTerm:ElementRef;
  products: IProduct[];
  brandsOptions: IProductBrand[];
  typesOptions: IProductType[];
  sortOptions = [
    { name: 'Alphabetical', value: 'Name' },
    { name: 'Price: Low to High', value: 'priceAsc' },
    { name: 'Price: High to Low', value: 'priceDesc' }
  ];
  params = new ShopParams();
  totalItems: number;


  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.getProduct();
    this.getBrands();
    this.getTypes();
  }

  onSortChange(sortName: string) {
    this.params.sort = sortName
    this.params.pageNumber = 1
    this.getProduct();
  }

  onBrandsChange(brandId: number){
    this.params.brandsId = brandId;
    this.params.pageNumber = 1
    this.getProduct();
  }
  onTypesChange(typeId: number){
    this.params.typeId = typeId;
    this.params.pageNumber = 1
    this.getProduct();
  }

  onSearch(){
    this.params.searchText = this.searchTerm.nativeElement.value;
    console.log(this.params.searchText)
    this.getProduct();
  }

  onSearchReset(){
    this.searchTerm.nativeElement.value = '';
    this.params = new ShopParams();
    this.getProduct();
  }

  onPageChanged(event: any){
    if(this.params.pageNumber !== event){
      this.params.pageNumber = event;
      this.getProduct();
    }
  }

  
  getProduct() {
    this.shopService.getProducts(this.params).subscribe(response => {
      this.products = response.data;
      this.params.pageNumber = response.pageIndex;
      this.params.pageSize = response.pageSize;
      this.totalItems = response.count;
    }, error => {
      console.log(error);
    });
  }
  getBrands() {
    this.shopService.getBrands().subscribe(response => {
      this.brandsOptions = [{ id: 0, name: 'All' }, ...response];
    }, error => {
      console.log(error);
    });
  }
  getTypes() {
    this.shopService.getTypes().subscribe(response => {
      this.typesOptions = [{ id: 0, name: 'All' }, ...response];
    }, error => {
      console.log(error);
    });
  }


}

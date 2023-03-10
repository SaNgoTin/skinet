import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/shared/Model/Product';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: IProduct

  constructor(private shopService: ShopService, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.getProduct()
  }

  getProduct() {
    this.shopService.getProduct(+this.activatedRoute.snapshot.paramMap.get("id")).subscribe(response => {
      this.product = response;
    }, error => {
      console.log(error);
    });
  }
}

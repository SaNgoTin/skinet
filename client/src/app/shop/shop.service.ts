import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { IPagination } from '../shared/Model/pagination';
import { IProduct } from '../shared/Model/Product';
import { IProductBrand } from '../shared/Model/ProductBrand';
import { IProductType } from '../shared/Model/productTypes';
import { ShopParams } from '../shared/Model/shopParam';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl ='https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  getProducts(shopParams: ShopParams){
    let  params = new HttpParams();
    if(shopParams.brandsId){
      params = params.append('BrandId',shopParams.brandsId.toString())
    }
    if(shopParams.typeId){
      params = params.append('TypeId',shopParams.typeId.toString())
    }
    if(shopParams.sort){
      params = params.append('sort',shopParams.sort)
    }
    if(shopParams.searchText !==''){
      params = params.append('search',shopParams.searchText)
    }
      params = params.append('pageindex',shopParams.pageNumber);
      params = params.append('pagesize',shopParams.pageSize)
    return this.http.get<IPagination>(this.baseUrl + 'products',{observe: 'response', params}).pipe(map(respose => {
      return respose.body;
    }));
  }

  getProduct(id :number){
    return this.http.get<IProduct>(this.baseUrl + 'products/'+id);
  }

  getBrands(){
    return this.http.get<IProductBrand[]>(this.baseUrl + 'products/brands');
  }
  getTypes(){
    return this.http.get<IProductType[]>(this.baseUrl + 'products/types');
  }
}

import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
selected: Product;
  products: Product[];
  constructor(private productService: ProductService) {   console.log('constructor') }

  ngOnInit() {
     this.getProducts();
  }
  getProducts(){
    // this.products = this.productService.getProducts();
    this.productService.getProducts().subscribe(data => {
      this.products=data;
     });
  }
  removeItem(id){
     this.productService.removeProduct(id).subscribe(Response => {this.products = this.products.filter(product => product.id != Response.id);
  })
}

}



  
  

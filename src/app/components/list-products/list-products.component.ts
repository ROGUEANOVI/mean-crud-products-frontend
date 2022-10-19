import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  listProducts: Product[] = []; 

  constructor(private _productService: ProductService){ }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    this._productService.getProducts().subscribe({
      next: (res) => {
        this.listProducts = res;
      }, 
      error: (err) => {
        console.error(err);
      }
    });
  }

  deleteProduct(_id: string){
    this._productService.deleteProduct(_id).subscribe({
      next: res => {
        Swal.fire({
          title: 'Producto Eliminado',
          text: 'El Producto se elimino con ¡exito!',
          icon: 'error',
          showConfirmButton: false,
          timer: 2000
        });
        this.getProducts();
      }, 
      error: err => {
        console.error(err);
      }
    });
  }
}

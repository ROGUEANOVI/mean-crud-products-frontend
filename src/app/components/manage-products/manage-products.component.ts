import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {

  productForm: FormGroup;
  title = "CREAR PRODUCTO";
  id: string;

  constructor(private fb: FormBuilder, private _productService: ProductService , private router: Router, private aRouter: ActivatedRoute) { 
    this.productForm = this.fb.group({
      name: ["", Validators.required],
      category: ["", Validators.required],
      location: ["", Validators.required],
      price: ["", Validators.required]
    });
    this.id = this.aRouter.snapshot.paramMap.get("id")!;
  }
    
  ngOnInit(): void {
    this.isEdit();
  }

  addProduct(){
    const newProduct: Product = {
    name: this.productForm.get("name")?.value,
    category: this.productForm.get("category")?.value,
    location: this.productForm.get("location")?.value,
    price: this.productForm.get("price")?.value
    }

    if(this.id !== null){
      this._productService.editProduct(this.id, newProduct).subscribe({
        next: res => {
          Swal.fire({
            title: 'Producto Actualizado',
            text: 'Producto Actualizado con Exito',
            icon: 'info',
            showConfirmButton: false,
            timer: 2000
          });
          this.router.navigate(["/"]);
        }, 
        error: err => {
          console.error(err);
          this.productForm.reset();
        }
      });
    }
    else{
      this._productService.addProduct(newProduct).subscribe({
        next: res => {
          Swal.fire({
            
            title: 'Producto Agregado',
            text: 'Producto Agregado con Exito',
            icon: 'success',
            showConfirmButton: false,
            timer: 2000
          });
          this.router.navigate(["/"]);
        },
        error: err => {
          console.error(err);
          this.productForm.reset();
        }
      });
    }   
  }

  isEdit(){
    if(this.id !== null){
      this.title = "EDITAR PRODUCTO";
      this._productService.getProduct(this.id).subscribe(
        res => {
          this.productForm.setValue({
            name: res.name,
            category: res.category,
            location: res.location,
            price: res.price
          });
        }
      );
    }
  }
}

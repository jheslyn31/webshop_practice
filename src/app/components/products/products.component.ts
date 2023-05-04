import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent{
  products!:any[];

  async ngOnInit(){
    const mProducts = await this.getProducts();
    this.products = mProducts
    for (let i= 0; i<mProducts.length;i++) {
      this.products[i].cantidad=1;
      
    }
    console.log(this.products)
  }

  // aumentarCantidad(pos: number, valor_agregar: number) {
  //   cantidad=products[pos].cantidad + valor_agregar;
  // }

  async getProducts() {
    // obtener lista de productos
    const res = await axios.get('http://10.168.180.112:8001/products/');
    return res.data.data
  }

}

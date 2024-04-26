import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/product.model';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-app';
  http = inject(HttpClient);
  products: Product[] = [];

  changedTitle() {
    this.title = 'my-app con cambio de estado';
  }

  // ejecutar al iniciar el ciclo de vida
  ngOnInit() {
    // aqui se usa RxJS para resolver la peticion asíncrona de forma reactiva
    // thanks to https://fakestoreapi.com/
    this.http
      .get<Product[]>('https://fakestoreapi.com/products')
      .subscribe((data) => {
        this.products = data;
        console.log(data);
      });
  }
}

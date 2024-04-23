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
  styleUrl: './app.component.css',
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
    // aqui se usa RxJS para solucionar la peticion asíncrona de forma reactiva
    this.http
      .get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        this.products = data;
        console.log(data);
      });
  }
}

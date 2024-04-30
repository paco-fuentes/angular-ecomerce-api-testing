import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  @Input() product!: Product;
}

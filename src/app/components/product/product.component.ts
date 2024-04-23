import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgIf],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  @Input() product!: Product;
}

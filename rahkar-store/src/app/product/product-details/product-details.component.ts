import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../product.service';
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  item: any;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.route.params.subscribe({
      next: (value: any) => {
        console.log(value);
        this.item = this.productService.products.filter(
          (element) => element.id == value.id
        )[0];
        console.log(this.item);
      },
    });
  }
}

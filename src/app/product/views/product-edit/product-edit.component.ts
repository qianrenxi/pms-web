import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../entity/product';
import { CuiLayer } from 'consoleui';

@Component({
  selector: 'pms-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  product: Product;

  constructor(private productService: ProductService, private layer: CuiLayer,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: { product: Product }) => {
      this.product = data.product;
    });
  }

  onSubmit(event) {
    this.productService.update(event.product).subscribe(
      p => {
        this.layer.msg('保存成功');
        this.toList()
      },
      e => {
        this.layer.msg('保存失败，请检查表单后重试');
      }
    );
  }

  onCancel() {
    this.toList();
  }

  toList() {
    this.router.navigate(['../../', 'list'], { relativeTo: this.route });
  }

}

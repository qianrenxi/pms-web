import { Component, OnInit } from '@angular/core';
import { Product } from '../../../entity/product';
import { ProductService } from '../../../service/product.service';
import { CuiLayer } from 'consoleui';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pms-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  product: Product = new Product();

  constructor(private productService: ProductService, private layer: CuiLayer,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit(event) {
    this.productService.create(event.product).subscribe(
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
    this.router.navigate(['../', 'list'], {relativeTo: this.route});
  }
}

import { Product } from 'app/common/entity/product';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductApiService } from 'app/common/api';
import { DocLib } from 'app/common/entity';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-product-doc-lib',
  templateUrl: './product-doc-lib.component.html',
  styleUrls: ['./product-doc-lib.component.scss']
})
export class ProductDocLibComponent implements OnInit {

  product: Product;
  docLibs: DocLib[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productApi: ProductApiService
  ) { }

  ngOnInit() {
    this.route.data.subscribe((data: {product: Product}) => {
      this.product = data.product;
      this.loadData();
    });
  }

  loadData() {
    this.productApi.getDocLibs(this.product.id).subscribe(
      libs => {
        this.docLibs = libs;
      }
    );
  }

}

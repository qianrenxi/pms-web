import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pms-product-requirement-batch-add',
  templateUrl: './product-requirement-batch-add.component.html',
  styleUrls: ['./product-requirement-batch-add.component.scss']
})
export class ProductRequirementBatchAddComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSave(event) {}

  onCancel(event) {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}

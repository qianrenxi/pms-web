import { Component, OnInit } from '@angular/core';
import { Bmod } from '../../../entity/bmod';
import { BmodService } from '../../../service/bmod.service';

@Component({
  selector: 'pms-bmod-select',
  templateUrl: './bmod-select.component.html',
  styleUrls: ['./bmod-select.component.scss']
})
export class BmodSelectComponent implements OnInit {
  bmod: Bmod;
  bmods: Bmod[];

  constructor(private bmodService: BmodService) { }

  ngOnInit() {
    this.bmodService.getModules().subscribe(
      bmods => this.bmods = bmods
    );
  }

}

import { Component, OnInit, Input, ContentChildren, TemplateRef, QueryList, AfterContentInit } from '@angular/core';
import { WizardStepComponent } from './wizard-step/wizard-step.component';

@Component({
  selector: 'cui-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit, AfterContentInit {
  @Input() direction: string = 'horizontal';  // horizontal | vertical

  @ContentChildren(WizardStepComponent) steps: QueryList<WizardStepComponent>;

  // steps: any[];
  activeIndex: number = 1;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log('Wizard inited.');
    this.steps.forEach((it, i) => {
      if (!it.setpIndex) {
        it.setpIndex = i;
      }
    });
  }

  itemClick(event, item, i) {

  }

  priv() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    }
    this.steps.forEach(it => {
      it.active = it.setpIndex == this.activeIndex;
    });
  }

}

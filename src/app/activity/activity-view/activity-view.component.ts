import { Component, OnInit } from '@angular/core';

import { Activity } from '../../entity/activity';
import { ActivityService } from '../../service/activity.service';

@Component({
  selector: 'pms-activity-view',
  templateUrl: './activity-view.component.html',
  styleUrls: ['./activity-view.component.scss']
})
export class ActivityViewComponent implements OnInit {
  activityGroups: {date: Date, activities: Activity[]}[];

  constructor(private activityService: ActivityService) { }

  ngOnInit() {
    this.activityGroups = [];

    this.activityService.getActivities().subscribe(
      groups => this.activityGroups = groups,
      error => {}
    );
  }

}

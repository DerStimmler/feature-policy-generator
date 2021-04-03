import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AllowList, AllowType, Feature} from "../feature";

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  @Input() feature: Feature = new Feature("undefined", new AllowList(AllowType.NONE));
  @Output() featureChange = new EventEmitter<Feature>();

  constructor() { }

  ngOnInit(): void {
  }

  updateOrigins(feature: Feature, value: string) {
    feature.allowList.origins = value
      .split(" ")
      .map(o => o.trim())
      .filter(o => o);
  }

  getClassName():string {
    if(this.feature.allowList.type === AllowType.ALL)
      return "all";

    return this.feature.allowList.type;
  }
}

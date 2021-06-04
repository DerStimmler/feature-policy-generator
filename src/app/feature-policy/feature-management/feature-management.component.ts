import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Feature } from '../feature';

@Component({
  selector: 'app-feature-management',
  templateUrl: './feature-management.component.html',
  styleUrls: ['./feature-management.component.scss']
})
export class FeatureManagementComponent implements OnInit {
  @Input() features: Feature[] = [];
  @Input() filter: string = '';
  @Output() featuresChange = new EventEmitter<Feature[]>();

  constructor() {}

  ngOnInit(): void {}

  filterMatches(feature: Feature): boolean {
    return !feature.directive.includes(this.filter);
  }
}

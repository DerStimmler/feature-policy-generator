import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Feature } from '../feature';

@Component({
  selector: 'app-feature-management',
  templateUrl: './feature-management.component.html',
  styleUrls: ['./feature-management.component.scss']
})
export class FeatureManagementComponent {
  @Input() features: Feature[] = [];
  @Input() filter: string = '';
  @Output() featuresChange = new EventEmitter<Feature[]>();

  filterMatches(feature: Feature): boolean {
    return !feature.directive.includes(this.filter);
  }
}

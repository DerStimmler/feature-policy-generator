import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-feature-filter',
  templateUrl: './feature-filter.component.html',
  styleUrls: ['./feature-filter.component.scss']
})
export class FeatureFilterComponent {
  @Output() filter = new EventEmitter<string>();
}

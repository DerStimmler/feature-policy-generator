import {Component, Input, OnInit} from '@angular/core';
import {Feature} from "../feature";

@Component({
  selector: 'app-feature-export',
  templateUrl: './feature-export.component.html',
  styleUrls: ['./feature-export.component.scss']
})
export class FeatureExportComponent implements OnInit {

  @Input() features: Feature[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  buildFeaturePolicy(features: Feature[]):string {
    return features.map(f => f.exportAsFeature()).join("; ");
  }

  buildPermissionPolicy(features: Feature[]):string {
    return features.map(f => f.exportAsPermission()).join("; ");
  }
}

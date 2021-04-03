import {Component, Input, OnInit} from '@angular/core';
import {Feature} from "../feature";
import {MatSnackBar} from "@angular/material/snack-bar";
import {config} from "rxjs";

@Component({
  selector: 'app-feature-export',
  templateUrl: './feature-export.component.html',
  styleUrls: ['./feature-export.component.scss']
})
export class FeatureExportComponent implements OnInit {

  @Input() features: Feature[] = [];

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  buildFeaturePolicy(features: Feature[]):string {
    return features.map(f => f.exportAsFeature()).join("; ");
  }

  buildPermissionPolicy(features: Feature[]):string {
    return features.map(f => f.exportAsPermission()).join("; ");
  }

  showInfoMessage() {
    this.snackBar.open("Copied!", "", {duration: 1000, horizontalPosition: "end", verticalPosition: "bottom", });
  }
}

import { Component, OnInit } from '@angular/core';
import {AllowList, AllowType, Feature} from "../feature";

@Component({
  selector: 'app-feature-policy',
  templateUrl: './feature-policy.component.html',
  styleUrls: ['./feature-policy.component.scss']
})
export class FeaturePolicyComponent implements OnInit {

  constructor() { }

  features: Feature[] = [
    new Feature("accelerometer", new AllowList(AllowType.NONE)),
    new Feature("ambient-light-sensor", new AllowList(AllowType.NONE)),
    new Feature("autoplay", new AllowList(AllowType.NONE)),
    new Feature("battery", new AllowList(AllowType.NONE)),
    new Feature("camera", new AllowList(AllowType.NONE)),
    new Feature("display-capture", new AllowList(AllowType.NONE)),
    new Feature("document-domain", new AllowList(AllowType.NONE)),
    new Feature("encrypted-media", new AllowList(AllowType.NONE)),
    new Feature("execution-while-not-rendered", new AllowList(AllowType.NONE)),
    new Feature("execution-while-out-of-viewport", new AllowList(AllowType.NONE)),
    new Feature("fullscreen", new AllowList(AllowType.NONE)),
    new Feature("geolocation", new AllowList(AllowType.NONE)),
    new Feature("gyroscope", new AllowList(AllowType.NONE)),
    new Feature("layout-animations", new AllowList(AllowType.NONE)),
    new Feature("legacy-image-formats", new AllowList(AllowType.NONE)),
    new Feature("magnetometer", new AllowList(AllowType.NONE)),
    new Feature("microphone", new AllowList(AllowType.NONE)),
    new Feature("midi", new AllowList(AllowType.NONE)),
    new Feature("navigation-override", new AllowList(AllowType.NONE)),
    new Feature("oversized-images", new AllowList(AllowType.NONE)),
    new Feature("payment", new AllowList(AllowType.NONE)),
    new Feature("picture-in-picture", new AllowList(AllowType.NONE)),
    new Feature("publickey-credentials-get", new AllowList(AllowType.NONE)),
    new Feature("sync-xhr", new AllowList(AllowType.NONE)),
    new Feature("usb", new AllowList(AllowType.NONE)),
    new Feature("vr", new AllowList(AllowType.NONE)),
    new Feature("wake-lock", new AllowList(AllowType.NONE)),
    new Feature("screen-wake-lock", new AllowList(AllowType.NONE)),
    new Feature("web-share", new AllowList(AllowType.NONE)),
    new Feature("xr-spatial-tracking", new AllowList(AllowType.NONE))
  ]
  filter: string = "";

  ngOnInit(): void {
  }

}

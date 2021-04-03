import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FeaturePolicyComponent} from "./feature-policy/feature-policy/feature-policy.component";

const routes: Routes = [
  {path: "**", component: FeaturePolicyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

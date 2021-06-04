import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturePolicyModule } from './feature-policy/feature-policy.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FeaturePolicyModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}

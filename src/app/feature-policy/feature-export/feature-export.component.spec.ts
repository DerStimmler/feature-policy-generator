import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureExportComponent } from './feature-export.component';

describe('FeatureExportComponent', () => {
  let component: FeatureExportComponent;
  let fixture: ComponentFixture<FeatureExportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureExportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturePolicyComponent } from './feature-policy.component';

describe('FeaturePolicyComponent', () => {
  let component: FeaturePolicyComponent;
  let fixture: ComponentFixture<FeaturePolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeaturePolicyComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

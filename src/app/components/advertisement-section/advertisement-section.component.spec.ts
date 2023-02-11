import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementSectionComponent } from './advertisement-section.component';

describe('AdvertisementSectionComponent', () => {
  let component: AdvertisementSectionComponent;
  let fixture: ComponentFixture<AdvertisementSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertisementSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

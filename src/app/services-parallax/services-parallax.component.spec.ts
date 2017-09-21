import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesParallaxComponent } from './services-parallax.component';

describe('ServicesParallaxComponent', () => {
  let component: ServicesParallaxComponent;
  let fixture: ComponentFixture<ServicesParallaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesParallaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesParallaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

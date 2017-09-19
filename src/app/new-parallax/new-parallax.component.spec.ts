import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewParallaxComponent } from './new-parallax.component';

describe('NewParallaxComponent', () => {
  let component: NewParallaxComponent;
  let fixture: ComponentFixture<NewParallaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewParallaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewParallaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

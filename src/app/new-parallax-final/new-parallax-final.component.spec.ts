import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewParallaxFinalComponent } from './new-parallax-final.component';

describe('NewParallaxFinalComponent', () => {
  let component: NewParallaxFinalComponent;
  let fixture: ComponentFixture<NewParallaxFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewParallaxFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewParallaxFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

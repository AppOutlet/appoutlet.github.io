import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Technology } from './technology';

describe('Technology', () => {
  let component: Technology;
  let fixture: ComponentFixture<Technology>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Technology]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Technology);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

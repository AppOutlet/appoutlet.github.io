import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Portifolio } from './portifolio';

describe('Portifolio', () => {
  let component: Portifolio;
  let fixture: ComponentFixture<Portifolio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Portifolio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Portifolio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

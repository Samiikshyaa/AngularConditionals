import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Random2Component } from './random2.component';

describe('Random2Component', () => {
  let component: Random2Component;
  let fixture: ComponentFixture<Random2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Random2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Random2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalisationComponent } from './normalisation.component';

describe('NormalisationComponent', () => {
  let component: NormalisationComponent;
  let fixture: ComponentFixture<NormalisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormalisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

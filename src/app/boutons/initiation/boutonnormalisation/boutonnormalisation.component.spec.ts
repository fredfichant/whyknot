import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonnormalisationComponent } from './boutonnormalisation.component';

describe('BoutonnormalisationComponent', () => {
  let component: BoutonnormalisationComponent;
  let fixture: ComponentFixture<BoutonnormalisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutonnormalisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutonnormalisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

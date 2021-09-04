import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlossenglishComponent } from './glossenglish.component';

describe('GlossenglishComponent', () => {
  let component: GlossenglishComponent;
  let fixture: ComponentFixture<GlossenglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlossenglishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlossenglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

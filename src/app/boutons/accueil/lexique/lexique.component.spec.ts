import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LexiqueComponent } from './lexique.component';

describe('LexiqueComponent', () => {
  let component: LexiqueComponent;
  let fixture: ComponentFixture<LexiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LexiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LexiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonenglishComponent } from './buttonenglish.component';

describe('ButtonenglishComponent', () => {
  let component: ButtonenglishComponent;
  let fixture: ComponentFixture<ButtonenglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonenglishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonenglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

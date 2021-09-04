import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonitalienComponent } from './buttonitalien.component';

describe('ButtonitalienComponent', () => {
  let component: ButtonitalienComponent;
  let fixture: ComponentFixture<ButtonitalienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonitalienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonitalienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonrusseComponent } from './buttonrusse.component';

describe('ButtonrusseComponent', () => {
  let component: ButtonrusseComponent;
  let fixture: ComponentFixture<ButtonrusseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonrusseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonrusseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

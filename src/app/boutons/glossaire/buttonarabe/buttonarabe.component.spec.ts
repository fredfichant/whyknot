import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonarabeComponent } from './buttonarabe.component';

describe('ButtonarabeComponent', () => {
  let component: ButtonarabeComponent;
  let fixture: ComponentFixture<ButtonarabeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonarabeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonarabeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

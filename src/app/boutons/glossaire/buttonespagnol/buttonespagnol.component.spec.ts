import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonespagnolComponent } from './buttonespagnol.component';

describe('ButtonespagnolComponent', () => {
  let component: ButtonespagnolComponent;
  let fixture: ComponentFixture<ButtonespagnolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonespagnolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonespagnolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

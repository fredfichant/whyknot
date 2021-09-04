import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RareteComponent } from './rarete.component';

describe('RareteComponent', () => {
  let component: RareteComponent;
  let fixture: ComponentFixture<RareteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RareteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RareteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

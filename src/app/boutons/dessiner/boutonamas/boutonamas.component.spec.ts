import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonamasComponent } from './boutonamas.component';

describe('BoutonamasComponent', () => {
  let component: BoutonamasComponent;
  let fixture: ComponentFixture<BoutonamasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutonamasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutonamasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

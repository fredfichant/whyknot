import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TresseComponent } from './tresse.component';

describe('TresseComponent', () => {
  let component: TresseComponent;
  let fixture: ComponentFixture<TresseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TresseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

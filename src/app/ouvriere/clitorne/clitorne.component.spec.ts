import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClitorneComponent } from './clitorne.component';

describe('ClitorneComponent', () => {
  let component: ClitorneComponent;
  let fixture: ComponentFixture<ClitorneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClitorneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClitorneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

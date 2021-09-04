import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReveComponent } from './reve.component';

describe('ReveComponent', () => {
  let component: ReveComponent;
  let fixture: ComponentFixture<ReveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

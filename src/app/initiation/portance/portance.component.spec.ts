import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortanceComponent } from './portance.component';

describe('PortanceComponent', () => {
  let component: PortanceComponent;
  let fixture: ComponentFixture<PortanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

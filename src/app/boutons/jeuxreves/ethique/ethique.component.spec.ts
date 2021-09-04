import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EthiqueComponent } from './ethique.component';

describe('EthiqueComponent', () => {
  let component: EthiqueComponent;
  let fixture: ComponentFixture<EthiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EthiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EthiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutoncodeComponent } from './boutoncode.component';

describe('BoutoncodeComponent', () => {
  let component: BoutoncodeComponent;
  let fixture: ComponentFixture<BoutoncodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutoncodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutoncodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

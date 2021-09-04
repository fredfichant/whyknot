import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonmutationComponent } from './boutonmutation.component';

describe('BoutonmutationComponent', () => {
  let component: BoutonmutationComponent;
  let fixture: ComponentFixture<BoutonmutationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutonmutationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutonmutationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

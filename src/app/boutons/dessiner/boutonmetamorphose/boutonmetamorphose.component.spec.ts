import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonmetamorphoseComponent } from './boutonmetamorphose.component';

describe('BoutonmetamorphoseComponent', () => {
  let component: BoutonmetamorphoseComponent;
  let fixture: ComponentFixture<BoutonmetamorphoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutonmetamorphoseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutonmetamorphoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

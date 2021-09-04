import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetamorphoseComponent } from './metamorphose.component';

describe('MetamorphoseComponent', () => {
  let component: MetamorphoseComponent;
  let fixture: ComponentFixture<MetamorphoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetamorphoseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetamorphoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

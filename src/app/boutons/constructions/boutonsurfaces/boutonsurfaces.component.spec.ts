import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonsurfacesComponent } from './boutonsurfaces.component';

describe('BoutonsurfacesComponent', () => {
  let component: BoutonsurfacesComponent;
  let fixture: ComponentFixture<BoutonsurfacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutonsurfacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutonsurfacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

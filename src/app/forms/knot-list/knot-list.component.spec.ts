import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnotListComponent } from './knot-list.component';

describe('KnotListComponent', () => {
  let component: KnotListComponent;
  let fixture: ComponentFixture<KnotListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnotListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnotListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

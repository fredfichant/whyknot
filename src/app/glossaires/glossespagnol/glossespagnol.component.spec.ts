import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlossespagnolComponent } from './glossespagnol.component';

describe('GlossespagnolComponent', () => {
  let component: GlossespagnolComponent;
  let fixture: ComponentFixture<GlossespagnolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlossespagnolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlossespagnolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

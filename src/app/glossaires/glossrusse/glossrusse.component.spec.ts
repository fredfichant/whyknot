import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlossrusseComponent } from './glossrusse.component';

describe('GlossrusseComponent', () => {
  let component: GlossrusseComponent;
  let fixture: ComponentFixture<GlossrusseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlossrusseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlossrusseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

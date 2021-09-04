import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlossitalienComponent } from './glossitalien.component';

describe('GlossitalienComponent', () => {
  let component: GlossitalienComponent;
  let fixture: ComponentFixture<GlossitalienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlossitalienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlossitalienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

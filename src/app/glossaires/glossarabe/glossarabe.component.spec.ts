import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlossarabeComponent } from './glossarabe.component';

describe('GlossarabeComponent', () => {
  let component: GlossarabeComponent;
  let fixture: ComponentFixture<GlossarabeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlossarabeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlossarabeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutoninvestigationsComponent } from './boutoninvestigations.component';

describe('BoutoninvestigationsComponent', () => {
  let component: BoutoninvestigationsComponent;
  let fixture: ComponentFixture<BoutoninvestigationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutoninvestigationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutoninvestigationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

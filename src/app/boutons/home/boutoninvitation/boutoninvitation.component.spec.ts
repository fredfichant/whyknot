import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutoninvitationComponent } from './boutoninvitation.component';

describe('BoutoninvitationComponent', () => {
  let component: BoutoninvitationComponent;
  let fixture: ComponentFixture<BoutoninvitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutoninvitationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutoninvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

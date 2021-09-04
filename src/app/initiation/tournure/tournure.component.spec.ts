import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournureComponent } from './tournure.component';

describe('TournureComponent', () => {
  let component: TournureComponent;
  let fixture: ComponentFixture<TournureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

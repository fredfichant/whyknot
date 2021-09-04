import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablenoComponent } from './tableno.component';

describe('TablenoComponent', () => {
  let component: TablenoComponent;
  let fixture: ComponentFixture<TablenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablenoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

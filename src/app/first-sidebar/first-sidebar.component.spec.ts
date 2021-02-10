import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSidebarComponent } from './first-sidebar.component';

describe('FirstSidebarComponent', () => {
  let component: FirstSidebarComponent;
  let fixture: ComponentFixture<FirstSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

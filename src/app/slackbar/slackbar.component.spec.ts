import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlackbarComponent } from './slackbar.component';

describe('SlackbarComponent', () => {
  let component: SlackbarComponent;
  let fixture: ComponentFixture<SlackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlackbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

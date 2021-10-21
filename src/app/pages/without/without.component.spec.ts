import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutComponent } from './without.component';

describe('WithoutComponent', () => {
  let component: WithoutComponent;
  let fixture: ComponentFixture<WithoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithComponent } from './with.component';

describe('WithComponent', () => {
  let component: WithComponent;
  let fixture: ComponentFixture<WithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

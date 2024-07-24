import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivenestedformComponent } from './reactivenestedform.component';

describe('ReactivenestedformComponent', () => {
  let component: ReactivenestedformComponent;
  let fixture: ComponentFixture<ReactivenestedformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactivenestedformComponent]
    });
    fixture = TestBed.createComponent(ReactivenestedformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

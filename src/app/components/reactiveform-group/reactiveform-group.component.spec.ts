import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveformGroupComponent } from './reactiveform-group.component';

describe('ReactiveformGroupComponent', () => {
  let component: ReactiveformGroupComponent;
  let fixture: ComponentFixture<ReactiveformGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveformGroupComponent]
    });
    fixture = TestBed.createComponent(ReactiveformGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

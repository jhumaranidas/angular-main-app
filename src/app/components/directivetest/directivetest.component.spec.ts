import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivetestComponent } from './directivetest.component';

describe('DirectivetestComponent', () => {
  let component: DirectivetestComponent;
  let fixture: ComponentFixture<DirectivetestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectivetestComponent]
    });
    fixture = TestBed.createComponent(DirectivetestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

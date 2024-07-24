import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateformtestComponent } from './templateformtest.component';

describe('TemplateformtestComponent', () => {
  let component: TemplateformtestComponent;
  let fixture: ComponentFixture<TemplateformtestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateformtestComponent]
    });
    fixture = TestBed.createComponent(TemplateformtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

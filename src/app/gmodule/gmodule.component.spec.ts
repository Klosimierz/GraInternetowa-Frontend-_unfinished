import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmoduleComponent } from './gmodule.component';

describe('GmoduleComponent', () => {
  let component: GmoduleComponent;
  let fixture: ComponentFixture<GmoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

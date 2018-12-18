import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularapiComponent } from './angularapi.component';

describe('AngularapiComponent', () => {
  let component: AngularapiComponent;
  let fixture: ComponentFixture<AngularapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

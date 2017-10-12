import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterpanelComponent } from './footerpanel.component';

describe('FooterpanelComponent', () => {
  let component: FooterpanelComponent;
  let fixture: ComponentFixture<FooterpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

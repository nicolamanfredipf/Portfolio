import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCardsComponent } from './nav-cards.component';

describe('NavCardsComponent', () => {
  let component: NavCardsComponent;
  let fixture: ComponentFixture<NavCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCreationComponent } from './dashboard-creation.component';

describe('DashboardCreationComponent', () => {
  let component: DashboardCreationComponent;
  let fixture: ComponentFixture<DashboardCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardCreationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

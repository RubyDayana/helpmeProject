import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSkeletonComponent } from './admin-skeleton.component';

describe('AdminSkeletonComponent', () => {
  let component: AdminSkeletonComponent;
  let fixture: ComponentFixture<AdminSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSkeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

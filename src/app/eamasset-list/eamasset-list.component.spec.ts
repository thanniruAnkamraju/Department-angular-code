import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EamassetListComponent } from './eamasset-list.component';

describe('EamassetListComponent', () => {
  let component: EamassetListComponent;
  let fixture: ComponentFixture<EamassetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EamassetListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EamassetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpassetListComponent } from './empasset-list.component';

describe('EmpassetListComponent', () => {
  let component: EmpassetListComponent;
  let fixture: ComponentFixture<EmpassetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpassetListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpassetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

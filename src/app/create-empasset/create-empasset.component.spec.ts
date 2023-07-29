import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmpassetComponent } from './create-empasset.component';

describe('CreateEmpassetComponent', () => {
  let component: CreateEmpassetComponent;
  let fixture: ComponentFixture<CreateEmpassetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmpassetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEmpassetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

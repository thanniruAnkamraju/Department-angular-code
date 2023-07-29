import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEamassetComponent } from './create-eamasset.component';

describe('CreateEamassetComponent', () => {
  let component: CreateEamassetComponent;
  let fixture: ComponentFixture<CreateEamassetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEamassetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEamassetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

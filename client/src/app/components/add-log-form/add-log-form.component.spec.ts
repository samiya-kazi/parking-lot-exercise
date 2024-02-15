import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLogFormComponent } from './add-log-form.component';

describe('AddLogFormComponent', () => {
  let component: AddLogFormComponent;
  let fixture: ComponentFixture<AddLogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddLogFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddLogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

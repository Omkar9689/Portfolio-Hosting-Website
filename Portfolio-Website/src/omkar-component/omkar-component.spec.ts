import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmkarComponent } from './omkar-component';

describe('OmkarComponent', () => {
  let component: OmkarComponent;
  let fixture: ComponentFixture<OmkarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OmkarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OmkarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

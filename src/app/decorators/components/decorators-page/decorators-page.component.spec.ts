import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoratorsPageComponent } from './decorators-page.component';

describe('DecoratorsPageComponent', () => {
  let component: DecoratorsPageComponent;
  let fixture: ComponentFixture<DecoratorsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecoratorsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DecoratorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

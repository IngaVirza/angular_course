import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeItemComponent } from './pipe-item.component';

describe('PipeItemComponent', () => {
  let component: PipeItemComponent;
  let fixture: ComponentFixture<PipeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PipeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

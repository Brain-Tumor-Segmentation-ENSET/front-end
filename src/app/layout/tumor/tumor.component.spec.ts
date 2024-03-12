import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TumorComponent } from './tumor.component';

describe('TumorComponent', () => {
  let component: TumorComponent;
  let fixture: ComponentFixture<TumorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TumorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TumorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

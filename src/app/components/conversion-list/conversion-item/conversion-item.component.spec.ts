import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionItemComponent } from './conversion-item.component';

describe('ConversionItemComponent', () => {
  let component: ConversionItemComponent;
  let fixture: ComponentFixture<ConversionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversionItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessShipmentModalComponent } from './process-shipment-modal.component';

describe('ProcessShipmentModalComponent', () => {
  let component: ProcessShipmentModalComponent;
  let fixture: ComponentFixture<ProcessShipmentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessShipmentModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessShipmentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

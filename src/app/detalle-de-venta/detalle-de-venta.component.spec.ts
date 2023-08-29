import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDeVentaComponent } from './detalle-de-venta.component';

describe('DetalleDeVentaComponent', () => {
  let component: DetalleDeVentaComponent;
  let fixture: ComponentFixture<DetalleDeVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleDeVentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleDeVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

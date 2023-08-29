import { Component } from '@angular/core';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent {

  public ventas = [];
  public columnas = ['cliente', 'direccion', 'total', 'detalles'];

  async ngOnInit() {
    
  }

  public verDetalle() {
    
    
  }


}

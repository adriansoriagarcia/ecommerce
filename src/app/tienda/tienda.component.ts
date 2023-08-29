import { Component } from '@angular/core';

import { FirestoreService } from '../firestore.service';
import { Producto } from '../producto';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent {

  public productos = [];

  
}

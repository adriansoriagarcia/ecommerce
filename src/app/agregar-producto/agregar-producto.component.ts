import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { FirestoreService } from '../firestore.service';
import { Producto } from '../producto';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent {

  productoEditando : Producto;  

  constructor(private router: Router, private firestoreService: FirestoreService) {
    this.productoEditando = {} as Producto;
  }

  clicBotonInsertar() {
    console.log(this.productoEditando)
    this.firestoreService.insertar("productos", this.productoEditando).then(() => {
      console.log('Producto creado correctamente!');
      this.productoEditando = {} as Producto;
    }, (error) => {
      console.error(error);
    });
  }

}


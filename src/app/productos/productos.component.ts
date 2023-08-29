import { Component } from '@angular/core';
import {Router} from "@angular/router";

import { FirestoreService } from '../firestore.service';
import { Producto } from '../producto';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  productoEditando : Producto;  

  idProductoSelec: string;

  arrayColeccionProductos: any = [{
    id: "",
    data: {} as Producto
   }];

  constructor(private router: Router, private firestoreService: FirestoreService) {
    this.productoEditando = {} as Producto;
    this.obtenerListaProductos();
    this.idProductoSelec = "";
  }
  

  selecProducto(productoSelec:any) {
    //console.log("Producto seleccionado: ");
    //console.log(productoSelec);
    this.idProductoSelec = productoSelec.id;
    this.router.navigate(['/producto/detalle/' + this.idProductoSelec]);
  
  }

  obtenerListaProductos(){
    this.firestoreService.consultar("productos").subscribe((resultadoConsultaProductos) => {
      this.arrayColeccionProductos = [];
      resultadoConsultaProductos.forEach((datosProducto: any) => {
        this.arrayColeccionProductos.push({
          id: datosProducto.payload.doc.id,
          data: datosProducto.payload.doc.data()
          
        });
      })
    });
  }

  navegarAFormulario() {
    this.router.navigateByUrl("/productos/agregar");
  }

  

}

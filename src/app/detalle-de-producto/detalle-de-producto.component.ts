import { Component } from '@angular/core';
import { Producto } from '../producto';
import { FirestoreService } from '../firestore.service';
import {ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router";

@Component({
  selector: 'app-detalle-de-producto',
  templateUrl: './detalle-de-producto.component.html',
  styleUrls: ['./detalle-de-producto.component.css']
})
export class DetalleDeProductoComponent {


  document: any = {
    id: "",
    data: {} as Producto
  };

  arrayColeccionProductos: any = [{
    id: "",
    data: {} as Producto
   }];

   productoEditando : Producto;  

  id:string | null = "";


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

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    console.log(this.id)
    this.firestoreService.consultarPorId("productos", this.id).subscribe((resultado) => {
      // Preguntar si se hay encontrado un document con ese ID
      if(resultado.payload.data() != null) {
        this.document.id = resultado.payload.id
        this.document.data = resultado.payload.data();
        //this.imagenTempSrc = this.document.data.imagen;
        // Como ejemplo, mostrar el nombre del cliente en consola
        //console.log(this.document.data.imagen);
        console.log(this.document.data)
      } else {
        // No se ha encontrado un document con ese ID. Vaciar los datos que hubiera
        this.document.data = {} as Producto;
        //console.log(this.document.data.imagen)
      } 
    });
    
  }

  constructor (private router: Router, private activatedRoute: ActivatedRoute, private firestoreService: FirestoreService) {
    this.productoEditando = {} as Producto;
    
  }


  //método que redirecciona a la página home.
  pasarPrimeraPantalla () {
    this.router.navigate(['productos'])
  }

  //método que modifica en firebase el producto
  clicBotonModificar() {
    this.firestoreService.actualizar("productos", this.document.id, this.document.data).then(() => {
      // Actualizar la lista completa
      this.obtenerListaProductos();
      console.log('Producto modificadao correctamente!');
      // Limpiar datos de pantalla
      this.productoEditando = {} as Producto;
      this.pasarPrimeraPantalla();
    })
  }

  //método que borra en firebase el producto
  clicBotonBorrar() {
    this.firestoreService.borrar("productos", this.document.id).then(() => {
      // Actualizar la lista completa
      this.obtenerListaProductos(); 
      console.log('Producto borrada correctamente!');
      // Limpiar datos de pantalla
      this.productoEditando = {} as Producto;
      this.pasarPrimeraPantalla();
    
    }
  )}


  
}

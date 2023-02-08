import { Producto_Inv } from "./Producto_Inv";
import { prodOrden, prodInv } from "../types";

export class Inventario {
  private _inv_prod: Producto_Inv[];

  constructor(productos?: Producto_Inv[]) {
    this._inv_prod = productos || [];
  }

  //#region PRODUCTOS INVENTARIO
  public get inv_prod(): Producto_Inv[] {
    return this._inv_prod;
  }
  //#endregion

  public agregarProducto(prod: Producto_Inv) {
    this._inv_prod.push(prod);
  }

  // public agregarProductos(productos: Producto_Inv[]) {
    
  //   productos.forEach(prod => { if(!prod_ids.includes(prod.id)) this.agregarProducto(prod) });
  // }

  private eliminarProducto(prod_id: number) {
    this._inv_prod = this._inv_prod.filter(prod => prod.id !== prod_id);
  }

  public eliminarProductos(prod_ids: number[]) {
    prod_ids.forEach(prod => this.eliminarProducto(prod));
  }

  public actualizarPrecios(productos: prodOrden[]) {
    productos.forEach(prodOrden => {
      const prodEncontrado = this._inv_prod.find(prod => prod.id === prodOrden.prod_id);
      if(prodEncontrado) prodEncontrado.precio = prodOrden.precio;
    })
  }

  public aumentarExistencias(producto: prodInv) {
    const prodEncontrado = this._inv_prod.find(prod => prod.id === producto.prod_id);
    if(prodEncontrado) prodEncontrado.cantidad += producto.cantidadAMod;
  }

  public reducirExistencias(productos: prodInv[]) {
    productos.forEach(prodAct => {
      const prodEncontrado = this._inv_prod.find(prod => prod.id === prodAct.prod_id);
      if(prodEncontrado) {
        prodEncontrado.cantidad -= prodAct.cantidadAMod
        this.revisarExistencias(prodEncontrado);
      }
    })
  }

  private revisarExistencias(producto: Producto_Inv) {
    if(producto.cantidad < 100) console.log(`Bajas existencias de ${producto.nombre}. Total: ${producto.cantidad}`);
  }
}

import { MetodoPagoBase, MetodoPagoConDescuento, MetodoPagoEnCuotas } from "./MetodosDePago";
import { MdoPagoDescuento } from "../types";
import { Producto } from "./Producto";
import { Producto_Inv } from "./Producto_Inv";

export class Venta {
  private _id: number;
  private _metodoPago: MetodoPagoBase | MetodoPagoConDescuento | MetodoPagoEnCuotas;
  private _fecha: Date;
  private _productos: Producto_Inv[];

  constructor(
    metPago: MetodoPagoBase | MetodoPagoConDescuento | MetodoPagoEnCuotas,
  ) {
    this._id = Math.floor(Math.random() * 1000000);
    this._metodoPago = metPago;
    this._fecha = new Date();
    this._productos = [];
  }

  //#region ID
  public get id(): number {
    return this._id;
  }
  //#endregion

  //#region METODO PAGO
  public get metodoPago(): MetodoPagoBase | MetodoPagoConDescuento | MetodoPagoEnCuotas {
    return this._metodoPago;
  }
  //#endregion

  //#region FECHA
  public get fecha(): Date {
    return this._fecha;
  }
  //#endregion

  //#region PRODUCTOS
  public get productos(): Readonly<Producto_Inv>[] {
    return this._productos;
  }
  //#endregion

  public calcularTotal(): number {
    if(!this._productos.length) return 0;

    let total = 0;
    this._productos.forEach(prod => { total += prod.precio * prod.cantidad });

    if(Object.values(MdoPagoDescuento).includes(this._metodoPago as unknown as MdoPagoDescuento)) {
      total -= total * 0.85;
    }

    return total;
  }

  public agregarProducto(prod: Producto): void {
    const productoEncontrado = this._productos.find(prodEnLista => prodEnLista.id === prod.id);

    if(productoEncontrado) {
      productoEncontrado.cantidad++;
      return;
    }
    
    const nuevoProductoInv: Producto_Inv = new Producto_Inv(prod.nombre, prod.marca, prod.categoria, prod.presentacion, prod.precio, 1);
    this._productos.push(nuevoProductoInv);
  }

  public removerProducto(prodId: number): void {
    const productoEncontrado = this._productos.find(prodEnLista => prodEnLista.id === prodId);

    if(productoEncontrado) {
      this._productos = this._productos.filter(prodEnLista => prodEnLista.id !== productoEncontrado.id)
    }
  }
}

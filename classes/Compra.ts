import { Producto_Inv } from "./Producto_Inv";
import { MdoPagoDescuento } from "../types";
import { MetodoPagoBase, MetodoPagoConDescuento, MetodoPagoEnCuotas } from "./MetodosDePago";

export class Compra {
  private _id: number;
  private _metodoPago: MetodoPagoBase | MetodoPagoConDescuento | MetodoPagoEnCuotas;
  private _fecha: Date;
  private _productos: Readonly<Producto_Inv>[];
  private _id_proveedor: number;

  constructor(
    metPago: MetodoPagoBase | MetodoPagoConDescuento | MetodoPagoEnCuotas,
    prods: Producto_Inv[],
    idProv: number
  ) {
    this._id = Math.floor(Math.random() * 1000000);
    this._metodoPago = metPago;
    this._fecha = new Date();
    this._productos = prods;
    this._id_proveedor = idProv;
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

  //#region ID PROVEEDOR
  public get id_proveedor(): number {
    return this._id_proveedor;
  }
  //#endregion

  public calcularTotal(): number {
    let total = 0;

    this._productos.forEach(prod => { total += prod.precio * prod.cantidad });
    if(Object.values(MdoPagoDescuento).includes(this._metodoPago as unknown as MdoPagoDescuento)) {
      total -= total * 0.9;
    }
    return total;
  }
}

import { Producto } from "./Producto";
import { Categoria } from "../types";

export class Producto_Inv extends Producto {
  private _cantidad: number;

  constructor(
    nom: string,
    mar: string,
    cat: Categoria,
    presen: string,
    prec: number,
    cant: number,
  ) {
    super(
      nom,
      mar,
      cat,
      presen,
      prec
    );

    this._cantidad = cant;
  }

  //#region CANTIDAD
  public get cantidad():number {
    return this._cantidad;
  }

  public set cantidad(nuevaCantidad: number) {
    this._cantidad = nuevaCantidad;
  }
  //#endregion
}

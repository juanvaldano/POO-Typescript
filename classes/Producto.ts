import { Categoria } from "../types";

export class Producto {
  protected _id: number;
  protected _nombre: string;
  protected _marca: string;
  protected _categoria: Categoria;
  protected _presentacion: string;
  protected _precio: number;

  constructor(
    nom: string,
    mar: string,
    cat: Categoria,
    presen: string,
    prec: number,
  ){
    this._id = Math.floor(Math.random() * 1000000);
    this._nombre = nom;
    this._marca = mar;
    this._categoria = cat;
    this._presentacion = presen;
    this._precio = prec;
  }

  //#region ID
  public get id(): number {
    return this._id
  }
  //#endregion

  //#region NOMBRE
  public get nombre(): string {
    return this._nombre
  }

  public set nombre(nuevoNombre: string) {
    this._nombre = nuevoNombre;
  }
  //#endregion

  //#region MARCA
  public get marca(): string {
    return this._marca
  }

  public set marca(nuevaMarca: string) {
    this._marca = nuevaMarca;
  }
  //#endregion

  //#region CATEGORIA
  public get categoria(): Categoria {
    return this._categoria
  }

  public set categoria(nuevaCategoria: Categoria) {
    this._categoria = nuevaCategoria;
  }
  //#endregion

  //#region PRESENTACION
  public get presentacion(): string {
    return this._presentacion
  }

  public set presentacion(nuevaPresentacion: string) {
    this._presentacion = nuevaPresentacion;
  }
  //#endregion

  //#region PRECIO
  public get precio(): number {
    return this._precio
  }

  public set precio(nuevoPrecio: number) {
    if(nuevoPrecio > 0) this._precio = nuevoPrecio;
  }
  //#endregion
}

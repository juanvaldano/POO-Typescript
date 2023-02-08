import { Persona } from "./Persona";
import { Producto } from "./Producto";

export class Proveedor extends Persona {
  private _razonSocial: string;
  private _email: string;
  private _notas: string;
  private _listaPrecios: Producto[];

  constructor(
    nom: string,
    ape: string,
    tel: string,
    razSoc: string,
    em: string,
    not: string,
    listPre: Producto[]
  ) {
    super(nom, ape, tel);

    this._razonSocial = razSoc;
    this._email = em;
    this._notas = not;
    this._listaPrecios = listPre;
  }

  //#region RAZON SOCIAL
  public get razonSocial(): string {
    return this._razonSocial;
  }

  public set razonSocial(RazonSocial: string) {
    this._razonSocial = RazonSocial;
  }
  //#endregion

  //#region EMAIL
  public get email(): string {
    return this._email;
  }

  public set email(Email: string) {
    this._email = Email;
  }
  //#endregion

  //#region NOTAS
  public get notas(): string {
    return this._notas;
  }

  public set notas(Notas: string) {
    this._notas = Notas;
  }
  //#endregion

  //#region LISTA DE PRECIOS
  public get listaPrecios(): Producto[] {
    return this._listaPrecios;
  }

  public set listaPrecios(ListaPrecios: Producto[]) {
    this._listaPrecios = ListaPrecios;
  }
  //#endregion
}

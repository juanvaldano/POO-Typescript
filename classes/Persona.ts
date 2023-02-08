export class Persona {
  private _id: number;
  private _nombre: string;
  private _apellido: string;
  private _telefono: string;

  constructor(nom: string, ape: string, tel: string) {
    this._id = Math.floor(Math.random() * 10000);
    this._nombre = nom;
    this._apellido = ape;
    this._telefono = tel;
  }

  //#region ID
  public get id(): number {
    return this._id;
  }
  //#endregion

  //#region NOMBRE
  public get nombre(): string {
    return this._nombre;
  }

  public set nombre(Nombre: string) {
    this._nombre = Nombre;
  }
  //#endregion

  //#region APELLIDO
  public get apellido(): string {
    return this._apellido;
  }

  public set apellido(Apellido: string) {
    this._apellido = Apellido;
  }
  //#endregion

  //#region TELEFONO
  public get telefono(): string {
    return this._telefono;
  }

  public set telefono(Telefono: string) {
    this._telefono = Telefono;
  }
  //#endregion
}

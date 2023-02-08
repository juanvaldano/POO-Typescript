import { Persona } from "./Persona";
import type { Turno } from "../types";

export class Empleado extends Persona {
  private _dni: number;
  private _turno: Turno;

  constructor(
    nom: string,
    ape: string,
    tel: string,
    dni: number,
    tur: Turno
  ) {
    super(nom, ape, tel);

    this._dni = dni;
    this._turno = tur;
  }

  //#region DNI
  public get dni(): number {
    return this._dni;
  }

  public set dni(DNI: number) {
    if(DNI > 10000000 && DNI < 99999999) this.dni = DNI;
  }
  //#endregion

  //#region TURNO
  public get turno(): Turno {
    return this._turno;
  }

  public set turno(Turno: Turno) {
    this._turno = Turno;
  }
  //#endregion
}

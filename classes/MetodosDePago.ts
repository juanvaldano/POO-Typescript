import { MdoPagoBase, MdoPagoCuotas, MdoPagoDescuento, todosMetodosPago } from "../types"

abstract class MetodoPago {
  protected _tipo: todosMetodosPago;

  constructor(
    tipo: todosMetodosPago
  ) {
    this._tipo = tipo;
  }

  public get tipo(): todosMetodosPago {
    return this._tipo;
  }
}

export class MetodoPagoBase extends MetodoPago {
  constructor(t: MdoPagoBase) {
    super(t);
  }
}

export class MetodoPagoConDescuento extends MetodoPago {
  constructor(t: MdoPagoDescuento) {
    super(t);
  }
}

export class MetodoPagoEnCuotas extends MetodoPago {
  private _cantCuotas: number;

  constructor(t: MdoPagoCuotas, cuotas: number) {
    super(t);

    this._cantCuotas = cuotas;
  }

  public get cantCuotas(): number {
    return this.cantCuotas;
  }
}

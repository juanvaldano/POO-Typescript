export enum MdoPagoBase {
  DEBITO = "debito",
  BILL_STA_FE = "billetera santa fe",
  TRANSF_BANCARIA = "tranferencia bancaria"
};

export enum MdoPagoCuotas {
  CREDITO = "credito"
};

export enum MdoPagoDescuento {
  EFECTIVO = "efectivo"
};

export enum Turno {
  MAÑANA = "mañana",
  TARDE = "tarde",
  NOCHE = "noche"
};

export enum Categoria {
  GOLOSINAS = "Golosinas",
  GASEOSAS = "Gaseosas",
  BEBIDAS_ALC = "Bebidas alcohólicas",
  LIMPIEZA = "Limpieza",
  CIGARRILLOS = "Cigarrillos",
  COMESTIBLES = "Comestibles"
}

interface prodBase {
  prod_id: number;
}

export interface prodOrden extends prodBase {
  precio: number;
}

export interface prodInv extends prodBase {
  cantidadAMod: number;
}

export type todosMetodosPago = MdoPagoBase | MdoPagoCuotas | MdoPagoDescuento;

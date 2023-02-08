import { Compra } from "./Compra";
import { Empleado } from "./Empleado";
import { Inventario } from "./Inventario";
import { MetodoPagoBase, MetodoPagoConDescuento, MetodoPagoEnCuotas } from "./MetodosDePago";
import { Producto_Inv } from "./Producto_Inv";
import { Proveedor } from "./Proveedor";
import { Venta } from "./Venta";

export class Kiosko {
  private _id: number;
  private _nombreCalle: string;
  private _numeroCalle: number;
  private _telefono: string;
  private _saldo: number;
  private _inventario: Inventario;
  private _ventaActual: Venta | null;
  private _ventas: Venta[];
  private _compras: Compra[];
  private _empleados: Empleado[];
  private _proveedores: Proveedor[];

  constructor(
    nombCalle: string,
    numCalle: number,
    tel: string,
    sal: number,
    inv: Inventario,
    venAct: Venta | null,
    vtas: Venta[],
    cpras: Compra[],
    emps: Empleado[],
    provs: Proveedor[]
  ) {
    this._id = Math.floor(Math.random() * 1000000),
    this._nombreCalle = nombCalle,
    this._numeroCalle = numCalle
    this._telefono = tel,
    this._saldo = sal,
    this._inventario = inv,
    this._ventaActual = venAct,
    this._ventas = vtas,
    this._compras = cpras,
    this._empleados = emps,
    this._proveedores = provs
  }

  //#region access definitions
    //#region ID
    public get id(): number {
      return this._id;
    }
    //#endregion

    //#region NOMBRE CALLE
    public get nombreCalle(): string {
      return this._nombreCalle;
    }

    public set nombreCalle(nuevoNombre: string) {
      this._nombreCalle = nuevoNombre;
    }
    //#endregion

    //#region NUMERO CALLE
    public get numeroCalle(): number {
      return this._numeroCalle;
    }

    public set numeroCalle(nuevoNumero: number) {
      this._numeroCalle = nuevoNumero;
    }
    //#endregion

    //#region TELEFONO
    public get telefono(): string {
      return this._telefono;
    }

    public set telefono(nuevoNumero: string) {
      this._telefono = nuevoNumero;
    }
    //#endregion

    //#region SALDO
    public get saldo(): number {
      return this._saldo;
    }
    //#endregion

    //#region INVENTARIO
    public get inventario(): Inventario {
      return this._inventario;
    }
    //#endregion

    //#region VENTA ACTUAL
    public get ventaActual(): Venta | null {
      return this._ventaActual;
    }
    //#endregion

    //#region VENTAS
    public get ventas(): Venta[] {
      return this._ventas;
    }
    //#endregion

    //#region COMPRAS
    public get compras(): Compra[] {
      return this._compras;
    }
    //#endregion

    //#region EMPLEADOS
    public get empleados(): Empleado[] {
      return this._empleados;
    }
    //#endregion

    //#region PROVEEDORES
    public get proveedores(): Proveedor[] {
      return this._proveedores;
    }
    //#endregion
  //#endregion

  //#region methods
    //#region VENTA
    public iniciarVenta(vta: Venta) {
      this._ventaActual = vta;
    }

    public realizarVenta(): void {
      if(!this._ventaActual) return;

      this._saldo += this._ventaActual.calcularTotal();
      this._inventario.reducirExistencias(this._ventaActual.productos.map(prod => {
        return { prod_id: prod.id, cantidadAMod: prod.cantidad }
      }));
      this._ventas.push(this._ventaActual);
    };

    public eliminarVenta(venta_id: number): void {
      this._ventas.filter(venta => venta.id !== venta_id)
    }
    //#endregion

    //#region COMPRA
    public realizarCompra(proveedor: Proveedor, productos_compra: Producto_Inv[], mtdoPago: MetodoPagoBase | MetodoPagoConDescuento | MetodoPagoEnCuotas) {
      const nuevaCompra: Compra = new Compra(mtdoPago, productos_compra, proveedor.id);

      this._saldo -= nuevaCompra.calcularTotal();
      productos_compra.forEach(prod => {
        const idsProdInv = this._inventario.inv_prod.map(pi => pi.id);
        if(idsProdInv.includes(prod.id)) {
          this._inventario.aumentarExistencias({ prod_id: prod.id, cantidadAMod: prod.cantidad })
        }
        else {
          this._inventario.agregarProducto(prod);
        }
      })
      this._compras.push(nuevaCompra);
    }

    public eliminarCompra(compra_id: number): void {
      this.compras.filter(compra => compra.id !== compra_id)
    }
    //#endregion

    //#region EMPLEADO
    public agregarEmpleado(nuevoEmpleado: Empleado): void {
      this._empleados.push(nuevoEmpleado);
    }

    public eliminarEmpleado(empleado_id: number): void {
      this._empleados = this._empleados.filter(emp => emp.id !== empleado_id);
    }
    //#endregion

    //#region PROVEEDOR
    public agregarProveedor(nuevoProveedor: Proveedor): void {
      this._proveedores.push(nuevoProveedor);
    }

    public eliminarProveedor(empleado_id: number): void {
      this._proveedores = this._proveedores.filter(emp => emp.id !== empleado_id);
    }
    //#endregion
  //#endregion
}

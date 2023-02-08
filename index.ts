import { Empleado } from "./classes/Empleado";
import { Proveedor } from "./classes/Proveedor";
import { MetodoPagoBase, MetodoPagoConDescuento, MetodoPagoEnCuotas } from "./classes/MetodosDePago";
import { Producto } from "./classes/Producto";
import { Inventario } from "./classes/Inventario";
import { Producto_Inv } from "./classes/Producto_Inv";
import { Compra } from "./classes/Compra";
import { Venta } from "./classes/Venta";

import {
  Turno,
  MdoPagoBase,
  MdoPagoCuotas,
  MdoPagoDescuento,
  Categoria
} from "./types";
import { Kiosko } from "./classes/Kiosko";

const newEmpleado: Empleado = new Empleado("John", "Rambo", "+54-3471-555555", 40000, Turno.TARDE);
const newProveedor: Proveedor = new Proveedor("John", "Wick", "+54-341-6666666", "Murder Inc.", "murder-inc@gmail.com", "Usually takes a day or two to get all the desired items and make the delivery", [new Producto("Coca Cola", "The Coca Cola Company", Categoria.GASEOSAS, "500ml", 250)]);
const newPagoBase: MetodoPagoBase = new MetodoPagoBase(MdoPagoBase.BILL_STA_FE);
const newPagoCuotas: MetodoPagoEnCuotas = new MetodoPagoEnCuotas(MdoPagoCuotas.CREDITO, 3);
const newPagoDescuento: MetodoPagoConDescuento = new MetodoPagoConDescuento(MdoPagoDescuento.EFECTIVO);
const newInventario: Inventario = new Inventario();

const newProducto1: Producto = new Producto("Coca Cola", "Coca Cola co.", Categoria.GASEOSAS, "500ml", 150);
const newProducto2: Producto = new Producto("Pepsi", "Pepsi co.", Categoria.GASEOSAS, "500ml", 500);

const prodInv1: Producto_Inv = new Producto_Inv("Fanta", "Coca Cola co.", Categoria.GASEOSAS, "500ml", 10, 100);
const prodInv2: Producto_Inv = new Producto_Inv("Pepsi", "Pepsi co.", Categoria.GASEOSAS, "500ml", 5, 100);
// const prodInv3: Producto_Inv = new Producto_Inv("Mocoreta", "Just Dont co.", Categoria.GASEOSAS, "500ml", 15, 100);

// const prodVenta1: Producto_Inv = new Producto_Inv("Fanta", "Coca Cola co.", Categoria.GASEOSAS, "500ml", 150, 3);
// const prodVenta2: Producto_Inv = new Producto_Inv("Mocoreta", "Just Dont co.", Categoria.GASEOSAS, "500ml", 110, 2);

const newCompra: Compra = new Compra(new MetodoPagoConDescuento(MdoPagoDescuento.EFECTIVO), [prodInv1, prodInv2], 1);

// newInventario.agregarProductos([prodInv1]);
// newInventario.aumentarExistencias([{prod_id: 1, cantidadAMod: 93}]);
// newInventario.reducirExistencias([{prod_id: 1, cantidadAMod: 55}]);

const newVenta: Venta = new Venta(new MetodoPagoEnCuotas(MdoPagoCuotas.CREDITO, 5));

newVenta.agregarProducto(newProducto1);
newVenta.agregarProducto(newProducto1);
newVenta.agregarProducto(newProducto1);
// newVenta.removerProducto(1)

const newKiosko: Kiosko = new Kiosko("La Paz", 1255, "+54-3471-777777", 100000, newInventario, null, [], [], [newEmpleado], [newProveedor])

console.log("Antes de la compra - Inventario", newKiosko.inventario.inv_prod);
console.log("Antes de la compra - Saldo", newKiosko.saldo);

newKiosko.realizarCompra(newProveedor, [prodInv1], new MetodoPagoBase(MdoPagoBase.DEBITO))
newKiosko.realizarCompra(newProveedor, [prodInv1], new MetodoPagoBase(MdoPagoBase.DEBITO))
newKiosko.realizarCompra(newProveedor, [prodInv2], new MetodoPagoBase(MdoPagoBase.DEBITO))

newKiosko.iniciarVenta(newVenta);
newKiosko.ventaActual?.agregarProducto(newProducto2);
newKiosko.realizarVenta();

console.log("Después de la compra - Inventario", newKiosko.inventario.inv_prod);
console.log("Después de la compra - Saldo", newKiosko.saldo);

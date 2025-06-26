import { useMemo } from "react";
import type { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalProps = {
	order: OrderItem[],
		tip: number
}

const OrderTotals = ({ order, tip } : OrderTotalProps) => {

	const subtotalAmout = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])
	const tipAmount = useMemo(() => subtotalAmout * tip, [subtotalAmout, tip])
	const totalAmount = useMemo(() => subtotalAmout + tipAmount, [subtotalAmout, tipAmount])

	return ( 
		<>
			<div className="space-y-3">
				<h2 className="font-bold text-2xl">Total y Propina</h2>
				<p>Subtotal: <span className="font-bold">{formatCurrency(subtotalAmout)}</span></p>
				<p>Propina: <span className="font-bold">{formatCurrency(tipAmount)}</span></p>
				<p>Total a pagar: <span className="font-bold">{formatCurrency(totalAmount)}</span></p>
			</div>

			<button 
				className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-50 hover:bg-gray-800 transition-colors"
				disabled={order.length === 0}
				onClick={() => console.log('Guardando orden...')}
			>Guardar Orden</button>
		</>
	 );
}
 
export default OrderTotals;
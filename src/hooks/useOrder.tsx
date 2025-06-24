import { useState } from "react";
import type { MenuItem, OrderItem } from '../types'

const useOrder = () => {
	const [order, setOrder] = useState<OrderItem[]>([])

	const addItem = (e: MenuItem) => {

		const itemExist = order.find(orderItem => orderItem.id === e.id)
		const newItem: OrderItem = {...e, quantity: 1}
		if (itemExist) {
			const updatedOrder = order.map(orderItem => orderItem.id === e.id 
				? {...orderItem, quantity: orderItem.quantity + 1}
				: orderItem
			)
			setOrder(updatedOrder)
		} else {
			setOrder([...order, newItem])
		}
		
		console.log(order)
		
	}

	return {
		addItem,
		order
	};
}
 
export default useOrder;
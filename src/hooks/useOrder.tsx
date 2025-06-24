import { useState } from "react";
import type { OrderItem } from '../types'

const useOrder = () => {
	const [order, setOrder] = useState<OrderItem[]>([])

	const addItem = () => {
		console.log('add item...')
	}

	return {
		addItem
	};
}
 
export default useOrder;
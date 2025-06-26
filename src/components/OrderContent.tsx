import { formatCurrency } from "../helpers";
import type { MenuItem, OrderItem } from "../types";
import CloseIcon from '@mui/icons-material/Close';

type OrderContentProps = {
	order: OrderItem[],
	removeItem: (item: OrderItem) => void
}

const OrderContent = ({ order, removeItem } : OrderContentProps) => {
	return ( 
		<div>
			<h2 className="font-bold text-4xl">Consumo</h2>
			<div className="space-y-3 mt-5">
				{
					order.length == 0
					? <p className="text-center">La orden esta vacia</p>
					: order.map(item => {
						return(
							<div 
								key={item.id}
								className="flex justify-between border-t border-gray-200 py-5 last-of-type:border-b items-center"
							>
								<div>
									<p className="text-lg">{item.name} - {formatCurrency(item.price)}</p>
									<p className="font-bold">Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
									</p>
								</div>
								<button
									className="bg-red-600 h-6 w-6 rounded-full text-white font-bold flex"
									onClick={() => removeItem(item)}
								>
									<CloseIcon />
								</button>
							</div>
						)
					})
				} 
			</div>
		</div>
	 );
}
 
export default OrderContent;
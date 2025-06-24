import type { OrderItem } from "../types";

type OrderContentProps = {
	order: OrderItem[]
}

const OrderContent = ({ order } : OrderContentProps) => {
	return ( 
		<div>
			<h2 className="font-bold text-4xl">Consumo</h2>
			<div className="space-y-3">
				{
					order.length == 0
					? <p className="text-center">La orden esta vacia</p>
					: order.map(item => {
						return(
							<div key={item.id}>
								<p>{item.name}</p>
							</div>
						)
					})
				} 
			</div>
		</div>
	 );
}
 
export default OrderContent;
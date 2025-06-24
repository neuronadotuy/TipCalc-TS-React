import type { MenuItem } from "../types";

type MenuItemProps = {
	item: MenuItem
	addItem: (e: MenuItem) => void
}

const MenuItem = ({item, addItem} : MenuItemProps) => {
	return ( 
		<button 
			className=" border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between"
			onClick={() => addItem(item)}	
		>
			<p>{item.name}</p>
			<p className="font-bold">${item.price}</p>
		</button>
	 );
}
 
export default MenuItem;
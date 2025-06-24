import MenuItem from "./components/MenuItem"
import OrderContent from "./components/OrderContent"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"

function App() {

  const { addItem, order } = useOrder()

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-bold">Calculadora de Propinas y Consumo</h1>
      </header>
      <main className="max-w-7xl mx-auto py-5 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-bold">Menu</h2>
          <div className="space-y-3 mt-10">
            {menuItems.map(e => 
            <MenuItem 
              item={e}
              key={e.id}
              addItem={addItem}
            />
          )}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          <OrderContent order={order}/>
        </div>
      </main>
    </>
  )
}

export default App

import { useReducer } from "react";
import { MenuItem } from "./components/MenuItem";
import { OrderContents } from "./components/OrderContents";
import { OrderTotals } from "./components/OrderTotals";
import { TipPorcentageForm } from "./components/TipPorcentageForm";
import { menuItems } from "./data/db";
import { initialState, orderReducer } from "./reducers/order-reducer";

function App() {
  

  const [state, dispatch] = useReducer(orderReducer, initialState)

  return (
    <>
      <div className="bg-gradient-to-r from-gray-900 to-gray-900">
        <header className=" py-5">
          <h1 className="text-center text-4xl font-black text-white">Calculadora de descuento en Consumos
          </h1>
        </header>

        <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
          <div className="p-3">
            <h2 className="text-4xl text-white font-black">Menú</h2>

            <div className="space-y-1 mt-5">
              {menuItems.map((item) => (
                <MenuItem 
                key={item.id} 
                item={item} 
                dispatch = {dispatch} />
              ))}
            </div>
          </div>

          <div className=" border rounded-lg text-white border-gray-400 apace-y-10 p-3 ">
            {state.order.length ? (
              <>
                <OrderContents
                  order={state.order}
                  dispatch = {dispatch}
                />
                <TipPorcentageForm
                  dispatch = {dispatch}
                  tip={state.tip}
                />
                <OrderTotals
                  order={state.order}
                  tip={state.tip}
                  dispatch = {dispatch}
                />
              </>
            ) : (
              <p className="text-center"> La orden esta vacia</p>
            )}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;

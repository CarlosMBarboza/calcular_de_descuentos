import { formatCurrency } from "../helpers";
import { OrderItem, MenuItem } from "../types";

type OrderContentsProps = {
  order: OrderItem[],
  removeItem: (id: MenuItem['id']) => void
};

export const OrderContents = ({ order, removeItem }: OrderContentsProps) => {
  return (
    <div>
      <h2 className="font-black text-4xl"> Consumo</h2>
      <div className="space-y-3 mt-5">
        {order.map((item) => (
          <div
            key={item.id}
            className="text-lg items-center flex justify-between border-t border-gray-400 py-5 last-of-type:border-b"
          >
            <div>
              <p>
                {item.name} - {formatCurrency(item.price)}
              </p>

              <p className="font-black">
                Cantidad: {item.quantity}-
                {formatCurrency(item.price * item.quantity)}
              </p>
            </div>
            <button className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
              onClick={() => removeItem(item.id)}
            >
              X
            </button>
          </div>
        ))
        }
      </div>
    </div>
  );
};

import { useFetch } from "../../hooks/useFetch";

const TrackTable = () => {
  const { data, isLoading, error } = useFetch("/orders/user-order", "order");

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  const subtotal = data?.reduce((acc, order) => {
    return (
      acc +
      order.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    );
  }, 0);

  const shipping = 10;
  const tax = subtotal * 0.1;
  const grandTotal = subtotal + shipping + tax;

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="overflow-x-auto">
        <table className="table-auto w-full min-w-max border-collapse">
          <thead className="bg-gray-100">
            <tr className="text-center">
              <th className="py-5 px-3 border-b border-gray-300 text-center">
                Image
              </th>
              <th className="py-5 px-3 border-b border-gray-300">Title</th>
              <th className="py-5 px-3 border-b border-gray-300">Quantity</th>
              <th className="py-5 px-3 border-b border-gray-300">Total</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((order, i) =>
              order.items.map((el, j) => (
                <tr
                  key={`${i}-${j}`}
                  className="border-b hover:bg-gray-50 text-center transition-colors"
                >
                  <td className="p-3 border-b border-gray-300">
                    <img
                      src={el.productId.image}
                      alt={el.productId.title}
                      className="w-12 h-12 object-cover mx-auto"
                    />
                  </td>
                  <td className="p-3 border-b border-gray-300">
                    {el.productId.title}
                  </td>
                  <td className="p-3 border-b border-gray-300">
                    {el.quantity}
                  </td>
                  <td className="p-3 border-b border-gray-300">
                    <div className="flex items-center justify-center gap-4">
                      <span>${el.price * el.quantity}</span>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="flex items-center gap-6 w-full flex-wrap">
        <p>Subtotal: £{subtotal.toFixed(2)}</p>
        <p>Shipping charges: £{shipping.toFixed(2)}</p>
        <p>Tax: £{tax.toFixed(2)}</p>
        <p>
          <span className="font-bold underline">Total</span>: £
          {grandTotal.toFixed(2)}
        </p>
      </div>

      <div className="flex flex-col gap-3 w-full bg-gray-100 p-4 rounded shadow">
        <h3 className="font-semibold underline">Order note:</h3>
        <p className="text-gray-500">
          If you have any questions about your order, please email{" "}
          <span className="text-blue-600 underline cursor-pointer">
            support@creeweb.com
          </span>
        </p>
      </div>
    </div>
  );
};

export default TrackTable;

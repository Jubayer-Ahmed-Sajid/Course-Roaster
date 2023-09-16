import Cart from "./Cart/Cart";

const Carts = ({carts}) => {
    
    return (
        <div className="bg-slate-100 rounded-xl p-4 shadow-md w-1/4 ">
            <h3 className="text-xl font-bold text-[#2F80ED] ">Credit Hour Remaining: {} hr</h3>

            {
                carts.map((cart,idx) => <Cart cart={cart}
                    key={idx}
                ></Cart>)

            }
        </div>
    );
};

export default Carts;
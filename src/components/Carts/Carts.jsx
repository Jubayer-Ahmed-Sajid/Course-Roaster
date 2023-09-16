import Cart from "./Cart/Cart";

const Carts = ({carts,remaining,credit}) => {
    
    return (
        <div className="bg-slate-100 rounded-xl shadow-md w-1/4 p-6 ">
            <h3 className="text-xl font-bold text-[#2F80ED] py-4 border-b-2 mb-4">Credit Hour Remaining: {remaining} hr</h3>
            <h3 className="text-xl font-bold mb-5">Course Name</h3>
           <div className="p-4 border-b-2 text-lg mb-4">
           {
                    
                    carts.map((cart,idx) => <Cart cart={cart}
                        key={idx}
                        credit={credit}
                    ></Cart>)
    
                }
           </div>
            <h3 className="text-[#1C1B1B99] font-semibold">Total Credit Hour: {credit}</h3>

        </div>
    );
};

export default Carts;
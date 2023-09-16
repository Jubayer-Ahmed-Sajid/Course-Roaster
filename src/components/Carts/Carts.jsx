import Cart from "./Cart/Cart";
import PropTypes from 'prop-types'

const Carts = ({carts,remaining,credit}) => {
    
    return (
        <div className="bg-slate-100 rounded-xl shadow-md w-1/4 p-4 ">
            <h3 className="text-xl font-bold text-[#2F80ED] py-4 border-b-2 mb-4">Credit Hour Remaining: {remaining} hr</h3>
            <h3 className="text-xl font-bold mb-5">Course Name</h3>
           <div className="p-4 border-b-2 text-lg mb-4">
           {
                    
                    carts.map((cart,idx) => <Cart cart={cart}
                        key={idx}
                        credit={credit}
                        idx={idx}
                    ></Cart>)
    
                }
           </div>
            <h3 className="text-[#1C1B1B99] font-semibold">Total Credit Hour: {credit}</h3>

        </div>
        
    );
   
};
Carts.propTypes = {
    carts : PropTypes.array.isRequired,
    remaining: PropTypes.number.isRequired,
    credit: PropTypes.number.isRequired

}

export default Carts;
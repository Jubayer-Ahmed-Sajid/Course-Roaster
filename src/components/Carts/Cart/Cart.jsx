import PropTypes, { number } from 'prop-types'
const Cart = ({cart,idx}) => {
    const {course_name} = cart

    return (
        <div>
            <ul className="list-none text-[#1C1B1B99]">
           <li className='flex'>{idx+1} <div className='ml-2'>{course_name}</div></li>
            </ul>
        </div>
    );
};
Cart.propTypes = {
    cart: PropTypes.object ,
    idx: number
}

export default Cart;

const Cart = ({cart}) => {
    const {course_name} = cart

    return (
        <div>
            <ol className="list-decimal">
            <li>{course_name}</li>

            </ol>
        </div>
    );
};

export default Cart;
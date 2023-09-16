
const Cart = ({cart,credit}) => {
    const {course_name} = cart

    return (
        <div>
            <ol className="list-decimal text-[#1C1B1B99]">
            <li>{course_name}</li>

            </ol>
        </div>
    );
};

export default Cart;
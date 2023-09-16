import { FaDollarSign } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import PropTypes from 'prop-types'

const Course = ({ course, handleSelect }) => {
    const { cover, course_name, details, price, credit_hour } = course;
    return (
        <div className="bg-slate-100 rounded-xl p-4 shadow-md">
            <img src={cover} alt="" className='mb-4 w-full' />
            <h3 className="text-xl font-semi-bold mb-3">{course_name}</h3>
            <h3 className='mb-5 text-[#1C1B1B99]'>{details}</h3>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <h3 className='text-xl'><FaDollarSign /></h3>
                    <h3 className='text-[#1C1B1B99]'>Price: {price}</h3>
                </div>
                <div className='flex items-center gap-2'>
                    <h3 className='text-xl'><FaBook /></h3>
                    <h3 className='text-[#1C1B1B99]'>credit:{credit_hour} hr</h3>
                </div>
            </div>
            <button className='bg-[#2F80ED]  text-white font-semi-bold text-xl rounded-lg w-full mt-8 mb-3 p-3' onClick={() => handleSelect(course)}>Select</button>

        </div>
    );
};
Course.propTypes = {
    course: PropTypes.object,
    handleSelect: PropTypes.func
}
export default Course;
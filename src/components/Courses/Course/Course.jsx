import { FaDollarSign } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
const Course = ({ course }) => {
    return (
        <div className="bg-slate-100 rounded-xl p-4 shadow-md">
            <img src={course.cover} alt="" className='mb-4 w-full' />
            <h3 className="text-xl font-semi-bold mb-3">{course.course_name}</h3>
            <h3 className='mb-5 text-[#1C1B1B99]'>{course.details}</h3>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <h3 className='text-xl'><FaDollarSign /></h3>
                    <h3 className='text-[#1C1B1B99]'>Price: {course.price}</h3>
                </div>
                <div className='flex items-center gap-2'>
                    <h3 className='text-xl'><FaBook /></h3>
                    <h3 className='text-[#1C1B1B99]'>credit:{course.credit_hour} hr</h3>
                </div>
            </div>
            <button className='bg-[#2F80ED]  text-white font-semi-bold text-xl rounded-lg w-full mt-8 mb-3 p-3' >Select</button>

        </div>
    );
};

export default Course;
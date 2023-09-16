import { useEffect } from "react";
import { useState } from "react";
import Course from "./Course/Course";


const Courses = ({handleSelect}) => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./Courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <h1 className="text-4xl text-center font-bold mt-12 mb-8">Course Registration</h1>
            <div className="grid grid-cols-3 w-3/4 gap-5">
                {
                    courses.map(course => <Course
                        course={course}
                        key={course.id}
                        handleSelect={handleSelect}></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;
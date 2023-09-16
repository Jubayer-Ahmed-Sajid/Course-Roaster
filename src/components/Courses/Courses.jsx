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
        <div className="w-3/4">
            
            <div className="grid grid-cols-3  gap-5">
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
import Course from '../models/courseModel.js';

export const getAllCourses = async(req, res)=> {
    try{
        const courses = await Course.find();
        res.json(courses)

    }catch(err){
        res.status(500).send(err.message)
    }
};

export const createCourse = async (req, res) =>{
    const course = new Course(req.body);
    try{
        await course.save();
        res.status(201).json(course)
    }catch(err){
        res.status(500).send(err.message)
    }
}
import Teacher from '../models/teacherModel.js'

export const getAllTeachers = async(req, res) => {
    try{
        const teachers = await Teacher.find()
        res.json(teachers)
        

    }catch(err){
        res.status(500).send(err.message)
    }
};


export const createTeacher = async(req, res) => {
    const teacher = new teacher(req.body);
    try{
        await teacher.save();
        res.status(201).json(teacher)
        
    }catch(err){
        res.status(400).send(err.message)
    }
};
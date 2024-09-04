import Student from '../models/studentModel.js'


export const getAllStudents = async(req, res) => {
    try{
        const students = await Student.find();
        res.render("students/index", {students})

    }catch(err) {
        res.status(500).send(err.message)
    }
};

export const createStudents = async(req, res) => {
    const student = new Student(req.body);
    try{
        await student.save();
        res.redirect('/students');
        
    }catch(err){
        res.status(400).send(err.message)
    }
};

export const getStudentById = async(req, res)=> {
    try{
        const student = await Student.findById(req.params.id);
        res.render('students/edit', {student});

    }catch(err){
        res.status(500).send(err.message)
    }
};

export const updateStudent = async(req, res) => {
    try{
        await Student.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/students');
    }catch(err){
        res.status(400).send(err.message)
    }
};

export const deleteStudent = async (req, res) => {
    try{
        await Student.findByIdAndDelete(req.params.id);
        res.redirect('/students');
        
    }catch(err){
        res.status(500).send(err.message)
    }
}
import express from 'express';
import {
    getAllStudents,
    createStudents,
    getStudentById,
    updateStudent,
    deleteStudent
} from '../controllers/studentController.js';


const router = express.Router();

router.get('/', getAllStudents);

router.get('/create', (req, res) => {
    res.render('students/create');
});

router.post('/', createStudents);

router.get('/edit/:id', getStudentById);

router.post('/edit/:id', updateStudent);

router.post('/delete/:id', deleteStudent);

export default router



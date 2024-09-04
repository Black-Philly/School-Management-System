import mongoose from "mongoose";



const studentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    class: {type: String, required: true}
})


const student = mongoose.model('Student', studentSchema)

export default student
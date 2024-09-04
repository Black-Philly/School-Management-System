import mongoose from "mongoose";


const connectDB = async() =>{
    try{
        await mongoose.connect(process.env.MongoDB_url)
        console.log('Connected to the Database')

    }catch(err){
        console.log(err, 'Serving error')
    }

}

export default connectDB
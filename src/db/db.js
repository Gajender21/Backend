import mongoose from "mongoose";

const dbConnect = async()=>{
   try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log("Connection Successful!!",{connectionInstance});
   } catch (error) {
    console.log(error);
    process.exit(1)
   }
}
export default dbConnect;

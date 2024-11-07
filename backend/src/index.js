import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from './app.js'
import seedAdmin from "./utils/seedData.js";

dotenv.config({
    path: './.env'
})

let port = process.env.PORT || 9001

connectDB()
    .then(() => {
        seedAdmin();
        app.listen(port || 8000, () => {
            console.log(`Server is running at port : ${port}`);
        })
    })
    .catch((err) => {
        console.log("MONGO db connection failed !!! ", err);
    })
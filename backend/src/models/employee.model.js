import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNo: {
        type: String,
        unique: true,
        required: true,
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"]
    },
    // image: {
    //     key: {
    //         type: String,
    //     },
    //     name: {
    //         type: String,
    //     },
    //     mimetype: {
    //         type: String,
    //     },
    //     location: {
    //         type: String,
    //     },
    //     size: {
    //         type: Number,
    //     }
    // },
    designation: {
        type: String
    },
    course: {
        type: String,
    },
    enabled: {
        type: Number,
        default: 1, //0:delete, 1:enable, 2:disable
    },
    isVerified: {
        type: Number,
        default: 0,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin'
    }
}, { timestamps: true })

export const Employee = mongoose.model("Employee", employeeSchema)
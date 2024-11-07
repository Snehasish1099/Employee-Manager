import { Employee } from "../models/employee.model.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js"

/* Create Employee */
const createEmployee = asyncHandler(async (req, res) => {
    let { name, email, phoneNo, gender, designation, course } = req.body
    if ([name, email, phoneNo].some((item) => item?.trim() === "")) {
        throw new ApiError(400, "Missing field found, all fields are required")
    }

    const existingEmployee = await Employee.findOne({
        $or: [{ name }, { email }, { phoneNo }]
    })
    if (existingEmployee) {
        throw new ApiError(409, "Employee already exists")
    }

    const user = await Employee.create({
        name, email, phoneNo, gender, designation, course
    })

    const createdUser = await Employee.findById(user._id).select("-designation -gender -course")
    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "Employee registered Successfully")
    )
})

/** Get Single Employee details */
const getEmployee = asyncHandler(async (req, res) => {
    const { id } = req.params

    const employee = await Employee.findById(id).select("-designation -gender -course")
    if (!employee) {
        throw new ApiError(404, "Employee not found")
    }

    return res.status(200).json(
        new ApiResponse(200, employee, "Employee details found")
    )
})

/** Get all Employees */
const getAllEmployees = asyncHandler(async (req, res) => {
    const employees = await Employee.find().select("-designation -gender -course")
    if (!employees || employees.length === 0) {
        throw new ApiError(404, "No Employees found")
    }

    return res.status(200).json(
        new ApiResponse(200, employees, "Employees found")
    )
})

/** Edit Employee details */
const updateEmployee = asyncHandler(async (req, res) => {
    const { id } = req.params
    const { name, email, phoneNo, gender, designation, course } = req.body

    const employee = await Employee.findById(id)
    if (!employee) {
        throw new ApiError(404, "Employee not found")
    }

    const updatedEmployee = await Employee.findByIdAndUpdate(
        id,
        { name, email, phoneNo, gender, designation, course },
        { new: true, runValidators: true }
    )

    return res.status(200).json(
        new ApiResponse(200, updatedEmployee, "Employee updated successfully")
    )
})

/** Delete Employee by Id */
const deleteEmployee = asyncHandler(async (req, res) => {
    const { id } = req.params

    const employee = await Employee.findById(id)
    if (!employee) {
        throw new ApiError(404, "Employee not found")
    }

    await Employee.findByIdAndDelete(id)

    return res.status(200).json(
        new ApiResponse(200, null, "Employee deleted successfully")
    )
})

/** Toggle enable/disable an Employee */ // status - 'enable' or 'disable'
const enableDisableEmployee = asyncHandler(async (req, res) => {
    const { id } = req.params
    const { status } = req.body

    const employee = await Employee.findById(id)
    if (!employee) {
        throw new ApiError(404, "Employee not found")
    }

    if (!['enable', 'disable'].includes(status)) {
        throw new ApiError(400, "Error while trying to enable/disable, please try again.")
    }

    if (status === 'enable') {
        employee.enabled = 1;  // Mark as enabled
    } else if (status === 'disable') {
        employee.enabled = 2;  // Mark as disabled
    }

    await employee.save()

    return res.status(200).json(
        new ApiResponse(200, employee, `Employee status updated to ${status}`)
    )
})


export {
    createEmployee,
    getEmployee,
    getAllEmployees,
    updateEmployee,
    deleteEmployee,
    enableDisableEmployee
}
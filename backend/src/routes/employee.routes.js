import express from 'express'
import { createEmployee, deleteEmployee, getAllEmployees, getEmployee, updateEmployee, enableDisableEmployee } from "../controllers/employee.controller.js"

const router = express.Router()

router.post("/employees", createEmployee)

router.get("/employees/list", getAllEmployees)

router.get("/employees/:id", getEmployee)

router.put("/employees/:id", updateEmployee)

router.delete("/employees/:id", deleteEmployee)

router.put("/employees/:id/status", enableDisableEmployee)

export default router
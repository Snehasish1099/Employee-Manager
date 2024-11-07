import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

import adminRouter from './routes/admin.routes.js'
import employeeRouter from './routes/employee.routes.js'

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(cookieParser())

app.use("/api/auth/", adminRouter)
app.use("/api/admin/employees/", employeeRouter)

export { app }
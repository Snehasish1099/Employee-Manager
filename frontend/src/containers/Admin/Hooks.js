import { useState } from "react"

export const ForAdmin = () => {

    const [employeeFormData, setEmployeeFormData] = useState(null)

    const [employeeForm, setEmployeeForm] = useState(false)
    const toggleEmployeeForm = (data) => {
        console.log("# toggleEmployeeForm triggered")
        console.log(data, "# data")
        if (data) {
            setEmployeeFormData(data)
        } else {
            setEmployeeFormData(null)
        }
        setEmployeeForm(!employeeForm)
    }

    return {
        employeeForm,
        toggleEmployeeForm,
        employeeFormData
    }
}
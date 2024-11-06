import React from 'react'
import EmployeeIndex from '../../components/Employees'
import { ForAdmin } from './Hooks'

const AdminEmployeeIndex = () => {

  const { employeeForm,
    toggleEmployeeForm,
    employeeFormData } = ForAdmin()

  return (
    <div>
      <EmployeeIndex 
        employeeForm={employeeForm}
        toggleEmployeeForm={toggleEmployeeForm}
        employeeFormData={employeeFormData}
      />
    </div>
  )
}

export default AdminEmployeeIndex
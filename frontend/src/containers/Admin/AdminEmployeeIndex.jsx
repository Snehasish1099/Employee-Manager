import React, { useEffect } from 'react'
import EmployeeIndex from '../../components/Employees'
import { ForAdmin } from './Hooks'

const AdminEmployeeIndex = () => {

  const { employeeForm,
    toggleEmployeeForm,
    employeeFormData,
    createEmployeeApiCall,
    getEmployeeListApiCall,
    updateEmployeeApiCall,
    searchString,
    handleSearchEmployee
  } = ForAdmin()


  useEffect(() => {
    getEmployeeListApiCall()
  }, [searchString])


  return (
    <div>
      <EmployeeIndex
        employeeForm={employeeForm}
        toggleEmployeeForm={toggleEmployeeForm}
        employeeFormData={employeeFormData}
        createEmployeeApiCall={createEmployeeApiCall}
        updateEmployeeApiCall={updateEmployeeApiCall}
        handleSearchEmployee={handleSearchEmployee}
        getEmployeeListApiCall={getEmployeeListApiCall}
      />
    </div>
  )
}

export default AdminEmployeeIndex
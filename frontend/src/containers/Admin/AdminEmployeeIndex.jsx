import React, { useEffect } from 'react'
import EmployeeIndex from '../../components/Employees'
import { ForAdmin } from './Hooks'
import SnackBarComponent from '../../common/Snackbar'

const AdminEmployeeIndex = () => {

  const { employeeForm,
    toggleEmployeeForm,
    employeeFormData,
    createEmployeeApiCall,
    getEmployeeListApiCall,
    updateEmployeeApiCall,
    searchString,
    handleSearchEmployee,
    adminNotification,
    messageClose
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
      <SnackBarComponent
        messageOpen={adminNotification.open}
        messageClose={messageClose}
        notificationText={adminNotification.message}
        subText={adminNotification.subText}
        alertType={adminNotification.alertType}
        borderClass={adminNotification.borderClass}
      />
    </div>
  )
}

export default AdminEmployeeIndex
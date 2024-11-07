import React from 'react'
import AdminEmployeeHeader from './AdminEmployeeHeader'
import EmployeeForm from './EmployeeForm'
import EmployeeList from './EmployeeList'

const EmployeeIndex = (props) => {

    return (
        <div>
            {props.employeeForm ? (
                <>
                    <AdminEmployeeHeader userName={props.employeeFormData && Object.keys(props.employeeFormData)?.length > 0 ? `Edit Employee` : `Add New Employee`} addBtn={false} />
                    <div className='flex'>
                        <div className='w-full'>
                            <EmployeeForm
                                toggleEmployeeForm={props.toggleEmployeeForm}
                                createEmployeeApiCall={props.createEmployeeApiCall}
                                employeeFormData={props.employeeFormData}
                                updateEmployeeApiCall={props.updateEmployeeApiCall}
                                totalUserCreateMsg={props.totalUserCreateMsg}
                                loading={props.loading}
                            />
                        </div>
                    </div>
                </>
            ) : (
                <div>
                    <AdminEmployeeHeader
                        userName={'Total Employees'}
                        dropDown={true}
                        addBtn={true}
                        toggleEmployeeForm={props.toggleEmployeeForm}
                        onChange={props.handleSearchEmployee}
                        search={true}
                        getEmployeeListApiCall={props.getEmployeeListApiCall}
                    />
                    <div className={`overflow-y-auto h-[75vh]`}>
                        <EmployeeList
                            getAllUsers={props.getAllUsers}
                            editEmployeeFormData={props.editEmployeeFormData}
                            toggleEmployeeForm={props.toggleEmployeeForm}
                            userEnableDisableApi={props.userEnableDisableApi}
                            loading={props.loading}
                            buttonLoading={props.buttonLoading}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default EmployeeIndex
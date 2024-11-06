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
                                createNewUserByAdmin={props.createNewUserByAdmin}
                                employeeFormData={props.employeeFormData}
                                editUserApi={props.editUserApi}
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
                        getAllUsers={props.getAllUsers}
                        onChange={props.handleSearchUser}
                        search={true}
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
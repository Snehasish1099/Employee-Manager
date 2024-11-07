import { useState } from "react"
import { BASE_URL } from "../../utils/constant"
import { doGetApiCall, doPostApiCall, doPutApiCall } from "../../utils/ApiConfig"
import { useDispatch } from "react-redux";
import { storeEmployeesList } from "./EmployeeReducer";
import _ from "lodash"

export const ForAdmin = () => {

    const dispatch = useDispatch();

    const [employeeFormData, setEmployeeFormData] = useState(null)

    const [searchString, setSearchString] = useState('')


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

    // This below three functionalities are only for snackbar during login
    const [adminNotification, setAdminNotification] = useState({
        open: false,
        message: "",
        subText: "",
        alertType: "",
        borderClass: "",
    });
    const messageClose = () => {
        setAdminNotification({
            open: false,
            message: "",
            subText: "",
            alertType: "",
            borderClass: "",
        });
    };
    const openMessage = (alertType, message, subText, borderClass) => {
        if (alertType) {
            setAdminNotification({
                open: true,
                message: message,
                subText: subText,
                alertType: alertType,
                borderClass: borderClass,
            });
            setTimeout(messageClose, 5000);
        }
    };


    // Debounce search using lodash 
    const handleSearch = (data) => {
        setSearchString(data)
    }
    const debounceSearch = _.debounce(handleSearch, 500)

    const handleSearchEmployee = (e) => {
        debounceSearch(e.target.value)
    }

    // Create Employee API call 
    const createEmployeeApiCall = async (employee) => {
        let phoneNum = '+'.concat('', employee.phoneNo)
        let data = {
            url: `${BASE_URL}/admin/employees`,
            bodyData: {
                name: employee.name,
                email: employee.email,
                phoneNo: phoneNum,
                gender: employee.gender,
                designation: employee.designation,
                course: employee.course,
            }
        }
        
        let res = await doPostApiCall(data)
        if (res?.success) {
            openMessage("success", "Success", res?.message, "success")
            setEmployeeForm(!employeeForm)
            getEmployeeListApiCall()
        } else {
            openMessage("error", "Error", res?.message, "error")
        }
    }

    // Get Employee List 
    const getEmployeeListApiCall = async (sortType) => {
        let data = ''
        if (sortType) {
            data = {
                url: `${BASE_URL}/admin/employees/list?sort=${sortType}`
            }
        }
        else if (searchString) {
            data = {
                url: `${BASE_URL}/admin/employees/list?string=${searchString}`
            }
        }
        else {
            data = {
                url: `${BASE_URL}/admin/employees/list`
            }
        }

        let res = await doGetApiCall(data)
        if (res?.success) {
            dispatch(storeEmployeesList(res?.data))
        } else {
            console.log("# No Employees found")
        }
    }

    // Update an Employee 
    const updateEmployeeApiCall = async (employeeData) => {
        let data = {
            url: `${BASE_URL}/admin/employees/${employeeFormData?._id}`,
            bodyData: {
                name: employeeData.name,
                designation: employeeData.designation,
                course: employeeData.course,
                gender: employeeData.gender,
            }
        }

        let res = await doPutApiCall(data)
        if (res?.success) {
            setEmployeeForm(!employeeForm)
            getEmployeeListApiCall()
            openMessage("success", "Success", res?.message, "success")
        } else {
            openMessage("error", "Error", res?.message, "error")
        }
    }

    return {
        employeeForm,
        toggleEmployeeForm,
        employeeFormData,
        adminNotification,
        messageClose,
        createEmployeeApiCall,
        getEmployeeListApiCall,
        updateEmployeeApiCall,
        searchString,
        handleSearchEmployee
    }
}
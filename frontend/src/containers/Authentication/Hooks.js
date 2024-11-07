import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doPostApiCall } from "../../utils/ApiConfig";
import { BASE_URL } from "../../utils/constant";

export const ForLogin = () => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const [loginError, setLoginError] = useState({
        code: "",
        error: false,
        message: ""
    })

    const navigate = useNavigate();

    // This below three functionalities are only for snackbar during login
    const [notification, setNotification] = useState({
        open: false,
        message: "",
        subText: "",
        alertType: "",
        borderClass: "",
    });
    const messageClose = () => {
        setNotification({
            open: false,
            message: "",
            subText: "",
            alertType: "",
            borderClass: "",
        });
    };
    const openMessageLogin = (alertType, message, subText, borderClass) => {
        if (alertType) {
            setNotification({
                open: true,
                message: message,
                subText: subText,
                alertType: alertType,
                borderClass: borderClass,
            });
            setTimeout(messageClose, 5000);
        }
    };

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    // Login API call 
    const Login = async () => {
        let data = {
            url: `${BASE_URL}/auth/login`,
            bodyData: {
                name: name,
                password: password
            }
        }

        const res = await doPostApiCall(data)
        console.log(res, "# res")
        // if (res?.success && res?.statusCode === 200) {
        //     openMessageLogin("success", "Success", res?.message, "success")
        //     localStorage.setItem("name", res?.data)
        //     navigate('/admin/dashboard')
        // } else {
        //     openMessageLogin("error", "Error", res?.message, "error")
        //     setLoginError({
        //         code: res?.code,
        //         error: res?.error,
        //         message: res?.message
        //     })
        // }
    }

    return {
        notification,
        openMessageLogin,
        handleName,
        handlePassword,
        loginError,
        Login
    }
}
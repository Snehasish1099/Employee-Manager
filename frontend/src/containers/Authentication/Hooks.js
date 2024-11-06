import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doPostApiCall } from "../../utils/ApiConfig";

export const ForLogin = () => {

    const [email, setEmail] = useState('')
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

    const handleEmailAddress = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordAddress = (e) => {
        setPassword(e.target.value)
    }

    // Login API call 
    const Login = async () => {
        setLoading(true)
        let data = {
            // url: `${SUB_ADMIN_API}/users/login`,
            bodyData: {
                email: email,
                password: password
            }
        }
        const emalRegex = /^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/i;
        if (!emalRegex.test(email)) {
            setLoading(false)
        }
        else {
            const res = await doPostApiCall(data)
            if (!res?.error && res?.status === 200) {
                setLoading(false)
                openMessageLogin("success", "Success", res?.message, "success")
                // const decryptResult1 = await encryptDecrypt(res?.result, 'd')
                // localStorage.setItem("name", decryptResult1?.name);
                // localStorage.setItem("email", decryptResult1?.email)
                // localStorage.setItem("userId", decryptResult1?.id);
                // decryptResult1?.role === 'admin' ? navigate(`/admin/dashboard`)
                //     :
                //     decryptResult1?.role === 'employee' && navigate(`/user`)
            } else if (res?.status === 403) {
                setLoading(false)
                openMessageLogin("warning", "Warning", res?.message, "warning")
                setLoginError({
                    code: res?.code,
                    error: res?.error,
                    message: res?.message
                })
            } else {
                setLoading(false)
                openMessageLogin("error", "Error", res?.message, "error")
                setLoginError({
                    code: res?.code,
                    error: res?.error,
                    message: res?.message
                })
            }
        }
    }

    return {
        notification,
        openMessageLogin,
        handleEmailAddress,
        handlePasswordAddress,
        loginError
    }
}
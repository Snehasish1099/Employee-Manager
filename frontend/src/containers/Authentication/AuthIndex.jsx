import React, { useEffect } from 'react'
import { ForLogin } from './Hooks'
import SnackBarComponent from '../../common/Snackbar'
import LoginPage from '../../components/Authentication/LoginPage'

const AuthenticationMain = () => {

    const {
        Login,
        handleName,
        handlePassword,
        passwordErrorMessage,
        emailErrorMessage,
        message,
        loginError,
        setLoginError,
        loading,
        notification,
        messageClose,
        checked,
        handleCheck
    } = ForLogin()

    useEffect(() => {
      console.log(notification, "# notification")
    }, [notification])
    

    return (
        <div>
            <LoginPage
                Login={() => Login()}
                setName={(e) => handleName(e)}
                setPassword={(e) => handlePassword(e)}
                emailErrorMessage={emailErrorMessage}
                message={message}
                passwordErrorMessage={passwordErrorMessage}
                loginError={loginError}
                setLoginError={setLoginError}
                loading={loading}
                checked={checked}
                handleCheck={handleCheck}
            />
            <SnackBarComponent
                messageOpen={notification.open}
                messageClose={messageClose}
                notificationText={notification.message}
                subText={notification.subText}
                alertType={notification.alertType}
                borderClass={notification.borderClass}
            />
        </div>
    )
}

export default AuthenticationMain
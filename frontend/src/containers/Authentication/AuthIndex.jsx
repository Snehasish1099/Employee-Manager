import React from 'react'
import { ForLogin } from './Hooks'
import SnackBarComponent from '../../common/Snackbar'
import LoginPage from '../../components/Authentication/LoginPage'

const AuthenticationMain = () => {

    const {
        Login,
        handleEmailAddress,
        handlePasswordAddress,
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

    return (
        <div>
            <LoginPage
                Login={() => Login()}
                setEmail={(e) => handleEmailAddress(e)}
                setPassword={(e) => handlePasswordAddress(e)}
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
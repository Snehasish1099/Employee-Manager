import { ClickAwayListener } from '@mui/base'
import React, { useState } from 'react'
import ButtonField from '../../common/ButtonField'
import TextFieldInput from '../../common/TextFieldInput'
import text from '../../common/text.json'
// import DigidialsLogoBlue from '../../../Images/CommonImages/DigidialsLogoBlue.svg'
// import './LoginPage.css'
import { useNavigate } from "react-router-dom";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const LoginPage = (props) => {
    const navigate = useNavigate();

    const [mailFocused, setMailFocused] = useState(false)
    const [passwordFocused, setPasswordFocused] = useState(false)
    const [showPasswoard, setShowPasswoard] = useState(true)

    return (
        <div className={`bg-white flex items-center justify-center w-full`}>
            <div className={`p-4 border border-purple-700`} style={{ width: '40%', marginTop: '8%' }}>
                {/* login Welcome msg  */}
                <div className={`flex items-center flex-col justify-between gap-5 w-full`}>
                    <img src={""} alt='logo' onClick={() => navigate('/')} className={`cursor-pointer h-14 w-28`} />
                    <div className={`flex flex-col gap-1`}>
                        <p className='text-black text-[15px]'>{text.enterDetails}</p>
                    </div>
                </div>
                {/* input fields */}
                <div className={`w-full flex flex-col items-center ${props.emailErrorMessage || props.passwordErrorMessage || props.message ? 'gap-4' : 'gap-6'} mt-6`}>
                    <ClickAwayListener onClickAway={() => setMailFocused(false)}>
                        <div onClick={() => setMailFocused(true)} className='w-1/2'>
                            <TextFieldInput
                                handelChange={(e) => props.setEmail(e)}
                                floatingLabel={mailFocused === true ? '*Email ID' : null}
                                focused={mailFocused}
                                onKeyPress={props.Login}
                                textnewclass={`w-full `}
                                placeholder={`${text.enter} ${text.email}`}
                            />
                            {props.emailErrorMessage && <p className={`error-message text-red-600 text-xs p-0 m-0`}>*{props.emailErrorMessage}</p>}
                        </div>
                    </ClickAwayListener>
                    <ClickAwayListener onClickAway={() => setPasswordFocused(false)}>
                        <div onClick={() => setPasswordFocused(true)} className='w-1/2'>
                            <TextFieldInput
                                typePassword={showPasswoard}
                                handelChange={(e) => props.setPassword(e)}
                                floatingLabel={passwordFocused === true ? '*Password' : null}
                                focused={passwordFocused}
                                onKeyPress={props.Login}
                                textnewclass={`w-full `}
                                placeholder={`${text.enter} ${text.password}`}
                                endAdornment={
                                    <div
                                        className={`cursor-pointer`}
                                        onClick={() => setShowPasswoard(!showPasswoard)}>
                                        {showPasswoard ?
                                            <VisibilityOffIcon sx={{ color: '#747774' }} />
                                            :
                                            <RemoveRedEyeIcon sx={{ color: '#747774' }} />}
                                    </div>
                                }
                            />
                            {props.passwordErrorMessage && <p className={`error-message text-red-600 text-xs p-0 m-0`}>*{props.passwordErrorMessage}</p>}
                        </div>
                    </ClickAwayListener>

                    <ButtonField
                        onClick={props.Login}
                        buttonName={text.Login}
                        buttonextracls={`px-2 py-2 text-white ${props.loading === true && 'bg-grey-300'} bg-orange-600 text-sm w-1/2 hover:bg-blue-400 hover:text-black`}
                        loading={props.loading}
                        disabled={props.loading === true ? true : false}
                    />
                    {/* For showing the error message if login isnt't successful  */}
                    {props?.loginError?.error === true && <p className={`text-red-5 text-sm text-center`}>{props?.loginError?.message}</p>}
                </div>
            </div>

        </div >
    )
}

export default LoginPage
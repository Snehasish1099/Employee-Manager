import React, { useState } from "react";
import { Alert, IconButton, Snackbar } from "@mui/material";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";

const SnackBarComponent = (props) => {
    const [state, setState] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });
    const { vertical, horizontal } = state;

    return (
        <div>
           <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}
                open={props.messageOpen}
                onClose={props.close}
                key={vertical + horizontal}
                style={{ width: '100%' }}
                action={
                    <IconButton size="small" aria-label="add" color="inherit"  onClick={props.messageClose} data-cy="notifiedMessage-module-closeIcon">
                        <DriveFolderUploadIcon />
                    </IconButton>
                }
            >
                <Alert
                    onClose={props.messageClose}
                    variant="filled"
                    severity={props.alertType}
                    style={{ width: 322, textAlign: 'left', background:
                            props.alertType === 'success' ?
                                'bg-green-500'
                                :
                                props.alertType === 'error' ?
                                    'bg-red-500'
                                    :
                                    props.alertType === 'warning' && 'bg-yellow-300'
                    }}
                    // icon={props.alertType === 'success' ? <img src={""} alt="success" />
                    //     :
                    //     props.alertType === 'error' ? <img src={""} alt="error"  height={5} width={35} />
                    //         :
                    //         props.alertType === 'warning' ? <img src={""} alt="warning" height={5} width={35} />
                    //             : false}
                >
                    <div className={`flex w-[100%] justify-between`}>
                        {props.alertType === 'success' ? <p className={`text-white`}>{props.notificationText}</p>
                            :
                            props.alertType === 'error' ? <p className={`text-white`}>{props.notificationText}</p>
                                :
                                props.alertType === 'warning' ? <p className={`text-white`}>{props.notificationText}</p>
                                    :
                                    null
                        }
                    </div>
                    {props.alertType === 'success' ? <p className={`text-white`}>{props.subText}</p>
                        :
                        props.alertType === 'error' ? <p className={`text-white`}>{props.subText}</p>
                            :
                            props.alertType === 'warning' ? <p className={`text-white`}>{props.subText}</p>
                                :
                                null
                    }
                </Alert>
            </Snackbar>
        </div>
    )
}

export default SnackBarComponent
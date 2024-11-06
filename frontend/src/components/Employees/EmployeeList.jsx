import React, { useState } from 'react'
import { CircularProgress, ClickAwayListener, Tooltip } from '@mui/material'
import ToggleSwitch from '../../common/ToggleSwitch'
import { useSelector } from 'react-redux'

const EmployeeList = (props) => {

    const totalEmployeesData = useSelector((state) => state.employee.employeeDetails)

    const [openMenu, setOpenMenu] = useState(false)
    const [rowId, setRowId] = useState(false)

    const toggleSwitchBtn = (userId, enableVal) => {
        let toggleVal = enableVal === 1 ? 2 : 1
        props.userEnableDisableApi(userId, toggleVal, 'disable')
    }

    const threeDotOptions = (idx) => {
        setOpenMenu(!openMenu)
        setRowId(idx)
    }

    return (
        <div className='w-full h-[70vh] border-[#EBEBEB]'>
            {props.loading === true ?
                <div className='flex h-full justify-center items-center'>
                    <CircularProgress size={20} color='success' />
                    <p className='pl-3'>Loading...</p>
                </div>
                :
                <>
                    {totalEmployeesData && totalEmployeesData?.length > 0 ?
                        <table className="table-auto w-full overflow-x-scroll bg-white">
                            <thead className='bg-white sticky top-0 z-10'>
                                <tr className='h-10 '>
                                    <th className={`w-[10%] text-[#585F71] text-left text-base`}>{'Unique Id'}</th>
                                    <th className={`w-[15%] text-[#585F71] text-left text-base pl-[2%]`}>{`User Name`}</th>
                                    <th className={`w-[13%] text-[#585F71] text-left text-base`}>{`Email id`}</th>
                                    <th className={`w-[11%] text-[#585F71] text-left text-base`}>{'Mobile No.'}</th>
                                    <th className={`w-[11%] text-[#585F71] text-left text-base`}>{'Designation'}</th>
                                    <th className={`w-[11%] text-[#585F71] text-left text-base`}>{`Gender`}</th>
                                    <th className={`w-[24%] text-[#585F71] text-left text-base`}>{`Course`}</th>
                                    <th className={`w-[24%] text-[#585F71] text-left text-base`}>{`Created at`}</th>
                                    <th className={`w-[24%] text-[#585F71] text-left text-base`}>{`Action`}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {totalEmployeesData?.map((user, idx) => {
                                    return (
                                        <tr
                                            key={idx}
                                            className={`overflow-x-auto drop-shadow-md border-t-2 border-b-2 z-10 border-[#EBEBEB] cursor-pointer h-16`}
                                        >
                                            <td className={`text-left text-[14px] `}>{user?.uniqueId}</td>
                                            <td className={`flex h-16 items-center px-[7%]`}>
                                                <img crossOrigin='anonymous' src={'usericon'} alt="profileIcon" className={`${user?.picture?.key !== null && 'rounded-full border'}`} />
                                                <Tooltip title={user?.name}>
                                                    <p className={`text-left text-[#1F2533] text-sm pl-2 pr-2 truncate`}>
                                                        {user?.name}
                                                    </p>
                                                </Tooltip>
                                            </td>
                                            <td className={`text-left  pr-4 text-[#1F2533] text-[14px] `}>
                                                <Tooltip title={user?.email}>
                                                    <p className='w-[8em] truncate'>{user?.email}</p>
                                                </Tooltip>
                                            </td>
                                            <td className={`text-left text-[14px] `}>{user?.phoneNo}</td>
                                            <td className={`text-left text-[14px] `}>{user?.designation}</td>
                                            <td className={`text-left text-[14px] `}>{user?.gender}</td>
                                            <td className={`text-left text-[14px] `}>{user?.course}</td>
                                            <td className={`text-left text-[14px] `}>{user?.createdAt}</td>

                                            <td className={`text-left pr-6 text-[14px] text-[#1F2533] relative`}>
                                                <div className='flex justify-between'>
                                                    <div className='flex items-center gap-2'>
                                                        <ToggleSwitch checked={user?.enabled === 1 ? true : false} onChange={() => toggleSwitchBtn(user?.id, user?.enabled)} />
                                                        <div className='w-20'></div>
                                                    </div>

                                                    <div className={`cursor-pointer p-1 w-[15px]`}
                                                        onClick={() => threeDotOptions(user?.id)}
                                                    >
                                                        <img src={"optionMenuIcon"} alt="option icon" className='text-start' width='4px' height='4px' />
                                                        {openMenu && rowId === user.id ?
                                                            <ClickAwayListener onClickAway={() => setOpenMenu(false)}>
                                                                <div className={`bg-white shadow-md w-[10rem] h-[2.8rem] rounded absolute right-10 bottom-0 flex p-2 items-center z-50`}>
                                                                    <div className={`flex items-center justify-center gap-2 `}>
                                                                        <div className='flex gap-1' onClick={() => props.toggleEmployeeForm(user)} >
                                                                            <img src={"editIcon"} alt="editIcon" width='12px' height='10px' />
                                                                            <span className={`text-xs text-gray-2`}>Edit</span>
                                                                        </div>
                                                                        <div className={`border-l mx-4 border-solid border-gray-1 h-6`}></div>
                                                                        <div className='flex gap-1' onClick={() => props.userEnableDisableApi(user?.id)}>
                                                                            <img src={"deleteIcon"} alt="deleteIcon" width='10px' height='10px' />
                                                                            <span className={`text-xs text-gray-2`}>Delete</span>

                                                                        </div>
                                                                        <div className={`border-l mx-4 border-solid border-gray-1 h-6`}></div>
                                                                    </div>
                                                                </div>
                                                            </ClickAwayListener>
                                                            :
                                                            null
                                                        }
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                                }
                            </tbody>
                        </table>
                        :
                        <div className={`flex justify-center items-center h-[70vh]`}>
                            "Nothing"
                        </div>
                    }
                </>
            }
        </div>
    )
}

export default EmployeeList
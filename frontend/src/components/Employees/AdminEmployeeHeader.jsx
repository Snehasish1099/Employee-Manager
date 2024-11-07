import React, { useState } from 'react'
import TextFieldInput from '../../common/TextFieldInput';
// import { InputAdornment } from '@mui/material';
import ButtonField from '../../common/ButtonField';
import DropDownField from '../../common/DropDownField';

const AdminEmployeeHeader = (props) => {

    const [dropdownName, setDropdownName] = useState('')
    const filterArr = [
        { name: "Name A-Z", value: "name-az" },
        { name: "Name Z-A", value: "name-za" },
        { name: "New-Old", value: "new-old" },
        { name: "Old-New", value: "old-new" },
    ]

    return (
        <div className={`flex justify-between items-center px-[2%] py-[1.4%] border-b border-slate-200 bg-white drop-shadow `}>
            <p className={`text-black text-xl ${props.nameCls}`}>{props.userName}</p>
            <div className={``}>
                {props.search === true &&
                    <TextFieldInput
                        onlyValue
                        textnewclass={`flex-1 w-full text-sm tableSearchBar`}
                        placeholder={`Search`}
                        id="outlined-basic"
                        variant="outlined"
                        // startAdornment={
                        //     <InputAdornment position={"start"}>
                        //         <img src={'search'} alt='search' />
                        //     </InputAdornment>
                        // }
                        fullWidth
                        onChange={props.onChange}
                    />
                }
            </div>
            <div className={`flex items-center justify-between gap-6 `}>

                {props.dropDown ?
                    <DropDownField
                        selectOption={filterArr}
                        dropDownRootCls={`h-10 pl-[25px] text-sm black`}
                        // filterImg={true}
                        handleChange={(e) => {
                            setDropdownName(e.target.value);
                            props.getEmployeeListApiCall(e.target.value)
                        }}
                        placeholder="Filter"
                        // name={selectArr}
                        option={dropdownName}
                    />
                    :
                    null
                }

                {props.addBtn ?
                    <ButtonField
                        buttonName={"Add"}
                        buttonextracls={`!px-4 !py-2 !text-white bg-blue-600 text-sm hover:bg-orange-600 hover:drop-shadow-xl`}
                        onClick={() => props.toggleEmployeeForm(null)}
                    />
                    :
                    null
                }

                {/* {props.showDateTimePicker &&
                    <div className={`flex justify-between items-center border border-[#DEDEDE] w-[15rem] px-3 py-2 rounded-md cursor-pointer relative bg-white h-12`} onClick={() => props.setDateOpenViews(!props.dateOpenViews)}>
                        <div className='flex items-center text-[#7B7B7B] gap-1'>
                            <img src={"eventIcon"} alt='event icon' />
                            <p className='text-[13px] text-gray-6'>{props.dateForViews[0]?.startDate !== null ? moment(props.dateForViews[0]?.startDate).format('DD-MM-YYYY') : text.startDate}</p>
                        </div>
                        <div className=' text-deepgray-4 text-[14px]'>{text.to}</div>
                        <div className='flex items-center basis-3/7 text-[#7B7B7B] gap-1'>
                            <img src={"eventIcon"} alt='event icon' />
                            <p className='text-[13px] text-gray-6'>{props.dateForViews[0]?.endDate !== null ? moment(props.dateForViews[0]?.endDate).format('DD-MM-YYYY') : text.endDate}</p>
                        </div>
                        {props.dateOpenViews === true ?
                            (<ReactDateRange
                                onChange={(item) => props.setDateForViews([item.selection])}
                                showSelectionPreview={true}
                                moveRangeOnFirstSelection={false}
                                ranges={props.dateForViews}
                                months={1}
                                direction="horizontal"
                                customStyles={{ position: 'absolute', top: '40px', right: '0px', zIndex: '10', }}
                            />)
                            : null
                        }
                    </div>
                } */}
            </div>
        </div>
    )
}

export default AdminEmployeeHeader
import React, { useState } from 'react'
import { useForm, Controller } from "react-hook-form"
import text from '../../common/text.json'
import TextFieldInput from '../../common/TextFieldInput'
import ButtonField from '../../common/ButtonField'
import PhoneInputField from '../../common/PhoneField'
import RadioButton from '../../common/RadioButton'
import DropDownField from '../../common/DropDownField'

const EmployeeForm = (props) => {
  const [check, setCheck] = useState(false)

  const {
    handleSubmit,
    reset,
    control,
    getValues,
    formState: { errors }
  } = useForm({
    defaultValues: {
      designation: props.employeeFormData?.designation ? props.employeeFormData?.designation : '',
      course: props.employeeFormData?.course ? props.employeeFormData?.course : ''
    }
  });

  const onSubmit = (data) => {
    props.employeeFormData && Object.keys(props.employeeFormData)?.length > 0 ?
      props.updateEmployeeApiCall(data)
      :
      props.createEmployeeApiCall(data)

    reset({
      name: '',
      email: '',
      phoneNo: '',
      designation: '',
      gender: '',
      course: '',
    })
  };

  const RadioLabel = [
    {
      value: "male",
      label: "Male"
    },
    {
      value: "female",
      label: "Female"
    },
  ]

  const courseArr = [
    { name: "BCA", value: "bca" },
    { name: "MCA", value: "mca" },
    { name: "B.Tech", value: "btech" },
    { name: "M.Tech", value: "mtech" },
    { name: "B.Sc", value: "bsc" },
    { name: "M.Sc", value: "msc" },
  ]

  const designationArr = [
    { name: "Software Developer", value: "sde" },
    { name: "DevOps", value: "devops" },
    { name: "AI/ML Engg.", value: "ai-ml engg." },
    { name: "Product Manager", value: "manager" },
    { name: "CEO", value: "ceo" },
    { name: "HR", value: "hr" },
  ]

  return (
    <div className={`p-10`}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex justify-between textFieldText'>
          <div className={`w-[65%]`}>
            {/* Name and Email  */}
            <div className={`grid grid-cols-2 gap-6 w-full my-4`}>
              {/* Name */}
              <div className='flex flex-col'>
                <Controller
                  name={"name"}
                  control={control}
                  render={({ field: { onChange, value }, fieldState: { error } }) => {
                    return (
                      (<TextFieldInput
                        onlyValue
                        textnewclass={`flex-1 w-full text-sm bg-white`}
                        onChange={onChange}
                        value={value}
                        defaultValue={(props.employeeFormData && Object.keys(props.employeeFormData)?.length > 0 && props.employeeFormData?.name ? props.employeeFormData?.name : value)}
                        floatingLabel={'Enter Name'}
                      />)
                    )
                  }}
                  rules={{
                    required: props.employeeFormData && Object.keys(props.employeeFormData)?.length > 0 ? false : true,
                    pattern: /^[a-zA-Z]/
                  }}
                />
                {errors.name && errors.name.type === "required" && (
                  <span className="error-message text-red-400 text-xs">{text.requiredField}</span>
                )}
                {errors.name && errors.name.type === "pattern" && (
                  <span className="error-message text-red-400 text-xs">Invalid Name</span>
                )}
              </div>

              <div className='flex flex-col'>
                {/* Email  */}
                <Controller
                  name={"email"}
                  control={control}
                  render={({ field: { onChange, value }, fieldState: { error } }) => {
                    return (
                      (
                        <TextFieldInput
                          onlyValue
                          textnewclass={`flex-1 w-full text-sm bg-white`}
                          onChange={onChange}
                          value={props.employeeFormData && (Object.keys(props.employeeFormData)?.length > 0 && props.employeeFormData?.email ? props.employeeFormData?.email : value)}
                          disabled={props.employeeFormData?.email ? true : false}
                          floatingLabel={'Enter Email'}
                        />
                      )
                    )
                  }}
                  rules={{
                    required: props.employeeFormData && Object.keys(props.employeeFormData)?.length > 0 ? false : true,
                    pattern: /^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/i
                  }}
                />
                {errors.email && errors.email.type === "required" && (
                  <span className="error-message text-red-400 text-xs">{text.requiredField}</span>
                )}
                {errors.email && errors.email.type === "pattern" && (
                  <span className="error-message text-red-400 text-xs">Please enter a valid email</span>
                )}
              </div>
            </div>

            {/* Phone number and Gender  */}
            <div className={`grid grid-cols-2 gap-6 w-full my-4`}>
              {/* Phone Number */}
              <div className='flex flex-col'>
                <Controller name={"phoneNo"}
                  control={control}
                  render={({ field: { onChange, value }, fieldState: { error } }) => {
                    return (
                      (
                        <PhoneInputField
                          // phoneName={'phoneNo'}
                          defaultCountry={'us'}
                          placeholder={'*Enter Phone number'}
                          label={'*Enter Phone Number'}
                          extraCls={`w-full text-sm mt-[0.45rem]`}
                          inputCls={`w-full h-[3.3rem] cursor-default`}
                          onChange={(value) => { onChange(value) }}
                          value={props.employeeFormData && Object.keys(props.employeeFormData)?.length > 0 && props.employeeFormData?.phoneNo ? props.employeeFormData?.phoneNo : value}
                          enableSearch={true}
                          disabled={props.employeeFormData && Object.keys(props.employeeFormData)?.length > 0 && props.employeeFormData?.phoneNo ? true : false}
                        />
                      )
                    )
                  }}
                  rules={{
                    required: props.employeeFormData && Object.keys(props.employeeFormData)?.length > 0 ? false : true,
                    pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i,
                    minLength: 10,
                  }}
                />
                {errors.phoneNo && errors.phoneNo.type === "required" && (
                  <span className="error-message text-red-400 text-xs">{text.requiredField}</span>
                )}
                {errors.phoneNo && errors.phoneNo.type === "pattern" && (
                  <span className="error-message text-red-400 text-xs">Please enter a valid phone number</span>
                )}
                {errors.phoneNo && errors.phoneNo.type === "maxLength" && (
                  <span className="error-message text-red-400 text-xs">Phone number should contain 10 numbers</span>
                )}
                {errors.phoneNo && errors.phoneNo.type === "minLength" && (
                  <span className="error-message text-red-400 text-xs">Phone number should contain 10 numbers</span>
                )}
              </div>

              {/* Gender  */}
              <div className='flex flex-col '>
                <Controller
                  name={'gender'}
                  control={control}
                  defaultValue={props.employeeFormData?.gender}
                  rules={{
                    required: true
                  }}
                  render={({ field: { onChange, value } }) => (
                    <RadioButton
                      name='gender'
                      value={value}
                      onChange={(e) => {
                        onChange(e.target.value);
                        // setRadioValue(e.target.value)
                      }}
                      Radiolabel={RadioLabel}
                    />
                  )}
                />
                {errors.gender && errors.gender.type === "required" && (
                  <span className="error-message text-red-400 text-xs">{text.requiredField}</span>
                )}
              </div>
            </div>

            {/* Designation and Course */}
            <div className={`grid grid-cols-2 gap-6 w-full my-4`}>
              {/* Designation */}
              <div className='flex flex-col'>
                <Controller
                  name={"designation"}
                  control={control}
                  render={({ field: { onChange, value }, fieldState: { error } }) => {
                    return (
                      (<DropDownField
                        name='designation'
                        id='designation'
                        dropDownRootCls={`bg-white`}
                        size="small"
                        selectOption={designationArr}
                        placeholder={`Enter Designation`}
                        option={value}
                        handleChange={(e) => onChange(e.target.value)}
                      />)
                    )
                  }}
                  rules={{
                    required: props.employeeFormData && Object.keys(props.employeeFormData)?.length > 0 ? false : true,
                  }}
                />
                {errors.designation && errors.designation.type === "required" && (
                  <span className="error-message text-red-400 text-xs">{text.requiredField}</span>
                )}
              </div>

              <div className='flex flex-col '>
                <Controller
                  name={"course"}
                  control={control}
                  render={({ field: { onChange, value }, fieldState: { error } }) => {
                    return (
                      (<DropDownField
                        name='course'
                        id='course'
                        dropDownRootCls={`bg-white`}
                        size="small"
                        selectOption={courseArr}
                        placeholder={`Enter Course`}
                        option={value}
                        handleChange={(e) => onChange(e.target.value)}
                      />)
                    )
                  }}
                  rules={{
                    required: props.employeeFormData && Object.keys(props.employeeFormData)?.length > 0 ? false : true,
                  }}
                />
                {errors.course && errors.course.type === "required" && (
                  <span className="error-message text-red-400 text-xs">{text.requiredField}</span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className={`flex justify-start my-4`}>
          <div className='flex gap-6'>
            <ButtonField
              buttonName={`cancel`}
              buttonInsidecls={`gap-2`}
              type='reset'
              buttonextracls={`!px-6 !py-2 !text-black bg-grey-400`}
              onClick={() => props.toggleEmployeeForm()}
            />
            <ButtonField
              buttonName={props.employeeFormData && Object.keys(props.employeeFormData)?.length > 0 ? `Update` : `Add`}
              type='submit'
              loading={props.loading}
              buttonInsidecls={`!flex-row-reverse gap-2 `}
              buttonextracls={`text-white bg-blue-600 !px-6 !py-2 `}
              onClick={handleSubmit(onSubmit)}
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default EmployeeForm
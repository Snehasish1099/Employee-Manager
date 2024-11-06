import { Checkbox } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types'

function CheckBox(props) {

    return (
        <div className={`checkbox`}>
            <Checkbox
                id={props.id}
                checked={props.checked}
                value={props.value}
                onChange={props.handleBoxChange}
                sx={props.sx}
                required={props.required}
                size={props.size}
                disabled={props.disabled}
                defaultChecked={props.defaultChecked}
                color={props.color}
                inputRef={props.inputRef}
                onClick={props.handleCheck}
            />
        </div>
    )
}

CheckBox.propTypes = {
    id: PropTypes.string,
    checked: PropTypes.bool,
    value: PropTypes.number,
    onChange: PropTypes.func,
    required: PropTypes.bool,
    size: PropTypes.string,
    disabled: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    color: PropTypes.string,
    handleCheck: PropTypes.func
};

export default CheckBox

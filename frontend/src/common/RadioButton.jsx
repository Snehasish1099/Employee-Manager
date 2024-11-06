import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import React from 'react'

const RadioButton = (props) => {
    const [value, setValue] = React.useState('male');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <FormControl>
            {/* <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel> */}
            <RadioGroup
                row
                aria-labelledby="demo-controlled-radio-buttons-group"
                name={props.name}
                value={props.value}
                onChange={props.onChange}
            >
                {props.Radiolabel.map((item) =>
                    <FormControlLabel value={item.value} control={<Radio />} label={item.label} />
                )}
            </RadioGroup>
        </FormControl>)
}

export default RadioButton
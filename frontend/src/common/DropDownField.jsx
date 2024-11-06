import { Box, FormControl, MenuItem, Select } from '@mui/material';
import React from 'react'
import PropTypes from 'prop-types';
// import Filtericon from "../../Images/CommonImages/Filtericon.svg"
import "./index.css"

const DropDownField = (props) => {

  const handleChange = (event) => {
    props.handleChange(event);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        {props.filterImg && (
          <div className={`!mr-4 ${props.filtericonCls} filterIconCls`}>
            <img src={"Filtericon"} alt="filter" />
          </div>
        )}
        <div className={`flex flex-col gap-2`}>
        <label className={props.dropDownLabelCls}>{props.label}</label>
        <Select
          className={`${props.option ? `` : `text-gray-60`} ${props.dropDownRootCls}`}
          id={props.id}
          size={props.size}
          value={props.option ? props.option : props.placeholder}
          onChange={handleChange}
          defaultValue={props.defaultValue}
          multiple={props.multiple}
          variant={props.variant}
          sx={props.sx}
          SelectDisplayProps={props.SelectDisplayProps}
          renderValue={props.renderValue}
          open={props.open}
          onOpen={props.onOpen}
          onClose={props.onClose}
          native={props.native}
          name={props.name}
        >
          
          <MenuItem disabled value={props.placeholder}>
            {props.placeholder}
          </MenuItem>
          {props.selectOption.map((item, idx) => (
            <MenuItem
              key={idx}
              value={item.value ? item.value : props.placeholder}
            >
              {item.name}
            </MenuItem>
          ))}
          </Select>

        </div>
        <p className={props.errorTextCls}>{props.errorText}</p>
      </FormControl>
    </Box>
  );
}

// eslint-disable-next-line react/no-typos
DropDownField.propTypes = {
  dropDownLabelCls: PropTypes.string,
  label: PropTypes.string,
  dropDownRootCls: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  selectOption: PropTypes.array,
  errorTextCls: PropTypes.string,
  defaultValue: PropTypes.any,
  multiple: PropTypes.bool,
  variant: PropTypes.string,
  sx: PropTypes.any,
  SelectDisplayProps: PropTypes.object,
  renderValue: PropTypes.func,
  open: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  native: PropTypes.bool,
  filterImg: PropTypes.bool,
  errorText: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  size: PropTypes.string

}

export default DropDownField
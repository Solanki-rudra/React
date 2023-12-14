import React from 'react';
import { Div, Label, Select } from '../styles/Styled_component';

function SelectField({ name, handleBlur, handleChange, value, label, options, width }) {
  return (
    <Div width={width}>
      <Label color='black'>{label}</Label>
      <Select
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value} 
      >
        <option value='' disabled>
          --Select Status--
        </option>
        {options.map((item, index) => (
          <option key={index} value={item.toLowerCase()}>
            {item}
          </option>
        ))}
      </Select>
    </Div>
  );
}


export default SelectField;

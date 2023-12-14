import React, { useEffect, useState } from 'react'
import { CheckItems, CheckRow, Div, Input, Label, LabelFor, SelectAll } from '../styles/Styled_component'

function CheckBoxGroup({ label, updateData,handleChange, initialOptions, width = '45%' }) {
    const [options, setOptions] = useState(initialOptions);
    // function handleChange(e) {
    //     let newData = { ...options }
    //     newData[e.target.name] = e.target.checked
    //     setOptions(newData)
    //     updateData(options);
    // }
    function handleAllChange(e) {
        let newData = {};
        for (const option in options) {
          newData[option] = e.target.checked;
        }
        setOptions(newData)
        updateData(options);
    }

    return (
        <Div width={width}>
            <Label>{label}</Label>
            <CheckRow>
                <SelectAll
                    type="checkbox"
                    checked={Object.values(options).every(item=>item)}
                    onChange={(e) => handleAllChange(e)}
                />

                {
                    Object.keys(options).map((option, index) => (
                        <CheckItems key={index}>
                            <Input
                                type="checkbox"
                                id={label + option}
                                name={option}
                                checked={options[option]}
                                onChange={handleChange}
                            />
                            <LabelFor htmlFor={label + option}>{option}</LabelFor>
                        </CheckItems>
                    ))
                }
            </CheckRow>
        </Div>
    )
}

export default CheckBoxGroup

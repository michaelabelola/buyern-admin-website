import React, {ChangeEvent, Dispatch, SetStateAction, useEffect, useState} from "react";
import {Country} from "../../model/Location";

interface SelectFieldItem {
    value: string | number;
    text: string | number;
    disabled?: boolean;
}

interface SelectFieldPropField {
    value?: string | number;
    populate?: () => SelectFieldItem[];
    onChange?: (value?: string | number) => void
}

interface SelectFieldProp extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
    field: SelectFieldPropField;
    items: SelectFieldItem[];
}

const SelectField = (props: SelectFieldProp) => {
    const [dataList, setDataList] = useState(props.items as SelectFieldItem[]);
    const [value, setValue] = useState(props.value as string | number);
    const loadData = (newValue: any) => {
        if (props.field.onChange)
            props.field.onChange(newValue)
    }
    const onchange = (event: ChangeEvent<HTMLSelectElement>) => {
        loadData(event.currentTarget.value)
    }
    useEffect(() => {
        loadData(undefined)
    }, [])
    useEffect(() => {
        setDataList(props.items)
    }, [props.items])
    useEffect(() => {
        if (props.field.value)
        setValue(props.field.value);
    }, [props.field.value])
    return (
        <span className={"w-full"}>
             <select {...props as any} className={`${props.className ? props.className : "form-select"}`} onChange={event => {
                 onchange(event)
             }}>
                                    {
                                        dataList.map((value, index) => {
                                            return <option key={index} value={value.value}
                                                           disabled={value.disabled}>{value.text}</option>
                                        })
                                    }
                                </select>
        </span>)
};
export type {SelectFieldPropField, SelectFieldItem};
export {SelectField};
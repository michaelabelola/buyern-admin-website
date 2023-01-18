import React, {useEffect, useState} from "react";
import {FormField, FormFieldStatus, FormFieldValidation, SelectFormField, SelectFormFieldDataType} from "./FormField";

interface InputFieldProp extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    field: FormField<string> | FormField<boolean> | FormField<number> | FormField<FileList> | FormField<undefined>;
}

const InputField = (props: InputFieldProp) => {
    const statusMessageClass = useState("");
    const inputFieldClass = useState("");

    function validateField(value: any, validations: FormFieldValidation[]): boolean {
        if (!validations) return successValidation();
        for (let validation of validations) {
            if (validation.name === "empty") {
                if (!value || value === "") {
                    if (props.field.status) props.field.status[1](FormFieldStatus.INVALID)
                    if (props.field.message) props.field.message[1](validation.errorMessage ? validation.errorMessage : "Field cant be empty")
                    statusMessageClass[1](" invalid-feedback");
                    inputFieldClass[1](" is-invalid");
                    return false;
                }
            } else if (validation.name === "matches") {
                if (value !== validation.matchValue) {
                    if (props.field.status) props.field.status[1](FormFieldStatus.INVALID)
                    if (props.field.message) props.field.message[1](validation.errorMessage ? validation.errorMessage : "doesnt match")
                    statusMessageClass[1](" invalid-feedback");
                    inputFieldClass[1](" is-invalid");
                    return false;
                }
            } else if (validation.name === "custom" && validation.validationFunction) {
                let validated: { status: FormFieldStatus | undefined, errorMessage?: string } = validation.validationFunction(value);
                if (validated.status !== FormFieldStatus.VALID) {
                    if (props.field.status) props.field.status[1](validated.status)
                    if (props.field.message) props.field.message[1](validated.errorMessage ? validated.errorMessage : "error")
                    statusMessageClass[1](" invalid-feedback");
                    inputFieldClass[1](" is-invalid");
                    return false;
                }
            }
        }
        return successValidation();
    }

    const successValidation = () => {
        if (props.field.status) props.field.status[1](FormFieldStatus.VALID)
        if (props.field.message) props.field.message[1]("")
        statusMessageClass[1]("");
        inputFieldClass[1]("");
        return true;
    }

    props.field.performValidations = () => {
        return validateField(props.field.value[0], props.field.validations as FormFieldValidation[])
    }
    const onchange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        if (props.field.onChange) {
            if (props.field.value)

                if (props.type === "checkbox") {
                    props.field.value[1](ev.currentTarget.checked);
                    if (props.field.validations) validateField(ev.currentTarget.checked, props.field.validations);
                } else if (props.type === "file") {
                    props.field.value[1](ev.currentTarget.files);
                    if (props.field.validations) validateField(ev.currentTarget.files, props.field.validations);
                } else {
                    props.field.value[1](ev.currentTarget.value)
                    if (props.field.validations) validateField(ev.currentTarget.value, props.field.validations);
                }
            (props.field as any).onChange(props.field.value, props.field.status, props.field.message)
        }
    }

    useEffect(() => {
        if (props.field.status)
            if (props.field.status[0] === FormFieldStatus.LOADING) {
                statusMessageClass[1](" loading-feedback");
                inputFieldClass[1](" is-loading");
            } else if (props.field.status[0] === FormFieldStatus.INVALID) {
                statusMessageClass[1](" invalid-feedback");
                inputFieldClass[1](" is-invalid");
            } else if (props.field.status[0] === FormFieldStatus.VALID) {
                statusMessageClass[1](" valid-feedback");
                inputFieldClass[1](" is-valid");

            }
    }, [props.field.status, statusMessageClass, inputFieldClass])
    return (
        <span className={"w-full"}>
            <input {...props} onChange={onchange}
                   className={`${props.className ? props.className : "form-control"} ${inputFieldClass[0]}`}
                   defaultValue={props.field.value ? props.field.value[0] as any : undefined as any}/>
            <div
                className={`invalid-feedback justify-content-start align-items-start text-start w-full ${statusMessageClass}`}>
                {props.field.message ? props.field.message[0] : ""}
            </div>
        </span>)
};

export {InputField};
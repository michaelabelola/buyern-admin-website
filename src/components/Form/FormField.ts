import {Dispatch, ReactElement, SetStateAction} from "react";

enum FormFieldStatus {
    INVALID, VALID, LOADING, DEFAULT
}

/**
 * @param <b>message</b> error message to be set if validation returns false
 * */
interface FormFieldValidation {
    name?: "empty" | "isValidPhone" | "isEmail" | "isNumber" | "matches" | "matchesRegEx" | "custom";
    errorMessage?: string | ReactElement;
    matchValue?: string | number | RegExp | undefined;
    validationFunction?: (fieldValue?: string | number | FileList) => {
        status: FormFieldStatus,
        errorMessage?: string
    }
}


interface FormField<T> {
    value: [T, Function];
    message?: [string, Function];
    status?: [FormFieldStatus, Function];
    onChange?: (valueState?: [T, Function], statusState?: [FormFieldStatus, Function], messageState?: [string, Function]) => any;
    validations?: FormFieldValidation[];
    performValidations?: () => boolean;
}

interface SelectFormFieldDataType {
    value: string | number;
    text: string | number;
    disabled?:boolean;
}

interface SelectFormField<T, dataLoaderParamType> {
    value: [T, Function];
    items: SelectFormFieldDataType[];
    message?: [string, Function];
    status?: [FormFieldStatus, Function];
    onChange?: (valueState?: [T, Function], statusState?: [FormFieldStatus, Function], messageState?: [string, Function]) => any;
    validations?: FormFieldValidation[];
    performValidations?: () => boolean;
    dataLoaderParam?: [dataLoaderParamType, Dispatch<SetStateAction<dataLoaderParamType>>]
    dataLoader: (param: dataLoaderParamType) => Promise<SelectFormFieldDataType[]>
}

export {FormFieldStatus};
export type {FormField, SelectFormFieldDataType, SelectFormField, FormFieldValidation};
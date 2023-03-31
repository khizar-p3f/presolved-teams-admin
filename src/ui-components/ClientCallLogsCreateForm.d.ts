/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ClientCallLogsCreateFormInputValues = {
    RecordingId?: string;
    tenantId?: string;
    callId?: string;
    contactId?: string;
    callType?: string;
    callStatus?: string;
    callStartTime?: string;
    callEndTime?: string;
    callDuration?: number;
    charge?: number;
    callerNumber?: string;
    calleeNumber?: string;
};
export declare type ClientCallLogsCreateFormValidationValues = {
    RecordingId?: ValidationFunction<string>;
    tenantId?: ValidationFunction<string>;
    callId?: ValidationFunction<string>;
    contactId?: ValidationFunction<string>;
    callType?: ValidationFunction<string>;
    callStatus?: ValidationFunction<string>;
    callStartTime?: ValidationFunction<string>;
    callEndTime?: ValidationFunction<string>;
    callDuration?: ValidationFunction<number>;
    charge?: ValidationFunction<number>;
    callerNumber?: ValidationFunction<string>;
    calleeNumber?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClientCallLogsCreateFormOverridesProps = {
    ClientCallLogsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    RecordingId?: PrimitiveOverrideProps<TextFieldProps>;
    tenantId?: PrimitiveOverrideProps<TextFieldProps>;
    callId?: PrimitiveOverrideProps<TextFieldProps>;
    contactId?: PrimitiveOverrideProps<TextFieldProps>;
    callType?: PrimitiveOverrideProps<TextFieldProps>;
    callStatus?: PrimitiveOverrideProps<TextFieldProps>;
    callStartTime?: PrimitiveOverrideProps<TextFieldProps>;
    callEndTime?: PrimitiveOverrideProps<TextFieldProps>;
    callDuration?: PrimitiveOverrideProps<TextFieldProps>;
    charge?: PrimitiveOverrideProps<TextFieldProps>;
    callerNumber?: PrimitiveOverrideProps<TextFieldProps>;
    calleeNumber?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ClientCallLogsCreateFormProps = React.PropsWithChildren<{
    overrides?: ClientCallLogsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ClientCallLogsCreateFormInputValues) => ClientCallLogsCreateFormInputValues;
    onSuccess?: (fields: ClientCallLogsCreateFormInputValues) => void;
    onError?: (fields: ClientCallLogsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ClientCallLogsCreateFormInputValues) => ClientCallLogsCreateFormInputValues;
    onValidate?: ClientCallLogsCreateFormValidationValues;
} & React.CSSProperties>;
export default function ClientCallLogsCreateForm(props: ClientCallLogsCreateFormProps): React.ReactElement;

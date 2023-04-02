/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ClientCallLogs } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ClientCallLogsUpdateFormInputValues = {
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
export declare type ClientCallLogsUpdateFormValidationValues = {
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
export declare type ClientCallLogsUpdateFormOverridesProps = {
    ClientCallLogsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type ClientCallLogsUpdateFormProps = React.PropsWithChildren<{
    overrides?: ClientCallLogsUpdateFormOverridesProps | undefined | null;
} & {
    callId?: string;
    clientCallLogs?: ClientCallLogs;
    onSubmit?: (fields: ClientCallLogsUpdateFormInputValues) => ClientCallLogsUpdateFormInputValues;
    onSuccess?: (fields: ClientCallLogsUpdateFormInputValues) => void;
    onError?: (fields: ClientCallLogsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ClientCallLogsUpdateFormInputValues) => ClientCallLogsUpdateFormInputValues;
    onValidate?: ClientCallLogsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ClientCallLogsUpdateForm(props: ClientCallLogsUpdateFormProps): React.ReactElement;

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PresolvedAuditCreateFormInputValues = {
    tenantId?: string;
    resource?: string;
    action?: string;
    byUser?: string;
    byDateTime?: string;
    changesMade?: string;
};
export declare type PresolvedAuditCreateFormValidationValues = {
    tenantId?: ValidationFunction<string>;
    resource?: ValidationFunction<string>;
    action?: ValidationFunction<string>;
    byUser?: ValidationFunction<string>;
    byDateTime?: ValidationFunction<string>;
    changesMade?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PresolvedAuditCreateFormOverridesProps = {
    PresolvedAuditCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    tenantId?: PrimitiveOverrideProps<TextFieldProps>;
    resource?: PrimitiveOverrideProps<TextFieldProps>;
    action?: PrimitiveOverrideProps<TextFieldProps>;
    byUser?: PrimitiveOverrideProps<TextFieldProps>;
    byDateTime?: PrimitiveOverrideProps<TextFieldProps>;
    changesMade?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type PresolvedAuditCreateFormProps = React.PropsWithChildren<{
    overrides?: PresolvedAuditCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PresolvedAuditCreateFormInputValues) => PresolvedAuditCreateFormInputValues;
    onSuccess?: (fields: PresolvedAuditCreateFormInputValues) => void;
    onError?: (fields: PresolvedAuditCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PresolvedAuditCreateFormInputValues) => PresolvedAuditCreateFormInputValues;
    onValidate?: PresolvedAuditCreateFormValidationValues;
} & React.CSSProperties>;
export default function PresolvedAuditCreateForm(props: PresolvedAuditCreateFormProps): React.ReactElement;

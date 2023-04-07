/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { PresolvedAudit } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PresolvedAuditUpdateFormInputValues = {
    tenantId?: string;
    resource?: string;
    action?: string;
    byUser?: string;
    byDateTime?: string;
    changesMade?: string;
};
export declare type PresolvedAuditUpdateFormValidationValues = {
    tenantId?: ValidationFunction<string>;
    resource?: ValidationFunction<string>;
    action?: ValidationFunction<string>;
    byUser?: ValidationFunction<string>;
    byDateTime?: ValidationFunction<string>;
    changesMade?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PresolvedAuditUpdateFormOverridesProps = {
    PresolvedAuditUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    tenantId?: PrimitiveOverrideProps<TextFieldProps>;
    resource?: PrimitiveOverrideProps<TextFieldProps>;
    action?: PrimitiveOverrideProps<TextFieldProps>;
    byUser?: PrimitiveOverrideProps<TextFieldProps>;
    byDateTime?: PrimitiveOverrideProps<TextFieldProps>;
    changesMade?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type PresolvedAuditUpdateFormProps = React.PropsWithChildren<{
    overrides?: PresolvedAuditUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    presolvedAudit?: PresolvedAudit;
    onSubmit?: (fields: PresolvedAuditUpdateFormInputValues) => PresolvedAuditUpdateFormInputValues;
    onSuccess?: (fields: PresolvedAuditUpdateFormInputValues) => void;
    onError?: (fields: PresolvedAuditUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PresolvedAuditUpdateFormInputValues) => PresolvedAuditUpdateFormInputValues;
    onValidate?: PresolvedAuditUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PresolvedAuditUpdateForm(props: PresolvedAuditUpdateFormProps): React.ReactElement;

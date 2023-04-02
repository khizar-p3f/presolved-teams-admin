/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { PresolvedAudit } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PresolvedAuditCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    tenantId: "",
    resource: "",
    action: "",
    byUser: "",
    byDateTime: "",
    changesMade: "",
  };
  const [tenantId, setTenantId] = React.useState(initialValues.tenantId);
  const [resource, setResource] = React.useState(initialValues.resource);
  const [action, setAction] = React.useState(initialValues.action);
  const [byUser, setByUser] = React.useState(initialValues.byUser);
  const [byDateTime, setByDateTime] = React.useState(initialValues.byDateTime);
  const [changesMade, setChangesMade] = React.useState(
    initialValues.changesMade
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTenantId(initialValues.tenantId);
    setResource(initialValues.resource);
    setAction(initialValues.action);
    setByUser(initialValues.byUser);
    setByDateTime(initialValues.byDateTime);
    setChangesMade(initialValues.changesMade);
    setErrors({});
  };
  const validations = {
    tenantId: [{ type: "Required" }],
    resource: [{ type: "Required" }],
    action: [{ type: "Required" }],
    byUser: [{ type: "Required" }],
    byDateTime: [{ type: "Required" }],
    changesMade: [{ type: "JSON" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          tenantId,
          resource,
          action,
          byUser,
          byDateTime,
          changesMade,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new PresolvedAudit(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "PresolvedAuditCreateForm")}
      {...rest}
    >
      <TextField
        label="Tenant id"
        isRequired={true}
        isReadOnly={false}
        value={tenantId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tenantId: value,
              resource,
              action,
              byUser,
              byDateTime,
              changesMade,
            };
            const result = onChange(modelFields);
            value = result?.tenantId ?? value;
          }
          if (errors.tenantId?.hasError) {
            runValidationTasks("tenantId", value);
          }
          setTenantId(value);
        }}
        onBlur={() => runValidationTasks("tenantId", tenantId)}
        errorMessage={errors.tenantId?.errorMessage}
        hasError={errors.tenantId?.hasError}
        {...getOverrideProps(overrides, "tenantId")}
      ></TextField>
      <TextField
        label="Resource"
        isRequired={true}
        isReadOnly={false}
        value={resource}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tenantId,
              resource: value,
              action,
              byUser,
              byDateTime,
              changesMade,
            };
            const result = onChange(modelFields);
            value = result?.resource ?? value;
          }
          if (errors.resource?.hasError) {
            runValidationTasks("resource", value);
          }
          setResource(value);
        }}
        onBlur={() => runValidationTasks("resource", resource)}
        errorMessage={errors.resource?.errorMessage}
        hasError={errors.resource?.hasError}
        {...getOverrideProps(overrides, "resource")}
      ></TextField>
      <TextField
        label="Action"
        isRequired={true}
        isReadOnly={false}
        value={action}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tenantId,
              resource,
              action: value,
              byUser,
              byDateTime,
              changesMade,
            };
            const result = onChange(modelFields);
            value = result?.action ?? value;
          }
          if (errors.action?.hasError) {
            runValidationTasks("action", value);
          }
          setAction(value);
        }}
        onBlur={() => runValidationTasks("action", action)}
        errorMessage={errors.action?.errorMessage}
        hasError={errors.action?.hasError}
        {...getOverrideProps(overrides, "action")}
      ></TextField>
      <TextField
        label="By user"
        isRequired={true}
        isReadOnly={false}
        value={byUser}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tenantId,
              resource,
              action,
              byUser: value,
              byDateTime,
              changesMade,
            };
            const result = onChange(modelFields);
            value = result?.byUser ?? value;
          }
          if (errors.byUser?.hasError) {
            runValidationTasks("byUser", value);
          }
          setByUser(value);
        }}
        onBlur={() => runValidationTasks("byUser", byUser)}
        errorMessage={errors.byUser?.errorMessage}
        hasError={errors.byUser?.hasError}
        {...getOverrideProps(overrides, "byUser")}
      ></TextField>
      <TextField
        label="By date time"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={byDateTime && convertToLocal(new Date(byDateTime))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              tenantId,
              resource,
              action,
              byUser,
              byDateTime: value,
              changesMade,
            };
            const result = onChange(modelFields);
            value = result?.byDateTime ?? value;
          }
          if (errors.byDateTime?.hasError) {
            runValidationTasks("byDateTime", value);
          }
          setByDateTime(value);
        }}
        onBlur={() => runValidationTasks("byDateTime", byDateTime)}
        errorMessage={errors.byDateTime?.errorMessage}
        hasError={errors.byDateTime?.hasError}
        {...getOverrideProps(overrides, "byDateTime")}
      ></TextField>
      <TextAreaField
        label="Changes made"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tenantId,
              resource,
              action,
              byUser,
              byDateTime,
              changesMade: value,
            };
            const result = onChange(modelFields);
            value = result?.changesMade ?? value;
          }
          if (errors.changesMade?.hasError) {
            runValidationTasks("changesMade", value);
          }
          setChangesMade(value);
        }}
        onBlur={() => runValidationTasks("changesMade", changesMade)}
        errorMessage={errors.changesMade?.errorMessage}
        hasError={errors.changesMade?.hasError}
        {...getOverrideProps(overrides, "changesMade")}
      ></TextAreaField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

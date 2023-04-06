/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { ClientCallLogs } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ClientCallLogsCreateForm(props) {
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
    callRecordId: "",
    callType: "",
    callStartTime: "",
    callEndTime: "",
    callDuration: "",
    charge: "",
    callerNumber: "",
    calleeNumber: "",
  };
  const [tenantId, setTenantId] = React.useState(initialValues.tenantId);
  const [callRecordId, setCallRecordId] = React.useState(
    initialValues.callRecordId
  );
  const [callType, setCallType] = React.useState(initialValues.callType);
  const [callStartTime, setCallStartTime] = React.useState(
    initialValues.callStartTime
  );
  const [callEndTime, setCallEndTime] = React.useState(
    initialValues.callEndTime
  );
  const [callDuration, setCallDuration] = React.useState(
    initialValues.callDuration
  );
  const [charge, setCharge] = React.useState(initialValues.charge);
  const [callerNumber, setCallerNumber] = React.useState(
    initialValues.callerNumber
  );
  const [calleeNumber, setCalleeNumber] = React.useState(
    initialValues.calleeNumber
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTenantId(initialValues.tenantId);
    setCallRecordId(initialValues.callRecordId);
    setCallType(initialValues.callType);
    setCallStartTime(initialValues.callStartTime);
    setCallEndTime(initialValues.callEndTime);
    setCallDuration(initialValues.callDuration);
    setCharge(initialValues.charge);
    setCallerNumber(initialValues.callerNumber);
    setCalleeNumber(initialValues.calleeNumber);
    setErrors({});
  };
  const validations = {
    tenantId: [{ type: "Required" }],
    callRecordId: [{ type: "Required" }],
    callType: [{ type: "Required" }],
    callStartTime: [{ type: "Required" }],
    callEndTime: [{ type: "Required" }],
    callDuration: [{ type: "Required" }],
    charge: [{ type: "Required" }],
    callerNumber: [{ type: "Required" }],
    calleeNumber: [{ type: "Required" }],
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
          callRecordId,
          callType,
          callStartTime,
          callEndTime,
          callDuration,
          charge,
          callerNumber,
          calleeNumber,
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
          await DataStore.save(new ClientCallLogs(modelFields));
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
      {...getOverrideProps(overrides, "ClientCallLogsCreateForm")}
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
              callRecordId,
              callType,
              callStartTime,
              callEndTime,
              callDuration,
              charge,
              callerNumber,
              calleeNumber,
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
        label="Call record id"
        isRequired={true}
        isReadOnly={false}
        value={callRecordId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tenantId,
              callRecordId: value,
              callType,
              callStartTime,
              callEndTime,
              callDuration,
              charge,
              callerNumber,
              calleeNumber,
            };
            const result = onChange(modelFields);
            value = result?.callRecordId ?? value;
          }
          if (errors.callRecordId?.hasError) {
            runValidationTasks("callRecordId", value);
          }
          setCallRecordId(value);
        }}
        onBlur={() => runValidationTasks("callRecordId", callRecordId)}
        errorMessage={errors.callRecordId?.errorMessage}
        hasError={errors.callRecordId?.hasError}
        {...getOverrideProps(overrides, "callRecordId")}
      ></TextField>
      <TextField
        label="Call type"
        isRequired={true}
        isReadOnly={false}
        value={callType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tenantId,
              callRecordId,
              callType: value,
              callStartTime,
              callEndTime,
              callDuration,
              charge,
              callerNumber,
              calleeNumber,
            };
            const result = onChange(modelFields);
            value = result?.callType ?? value;
          }
          if (errors.callType?.hasError) {
            runValidationTasks("callType", value);
          }
          setCallType(value);
        }}
        onBlur={() => runValidationTasks("callType", callType)}
        errorMessage={errors.callType?.errorMessage}
        hasError={errors.callType?.hasError}
        {...getOverrideProps(overrides, "callType")}
      ></TextField>
      <TextField
        label="Call start time"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={callStartTime && convertToLocal(new Date(callStartTime))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              tenantId,
              callRecordId,
              callType,
              callStartTime: value,
              callEndTime,
              callDuration,
              charge,
              callerNumber,
              calleeNumber,
            };
            const result = onChange(modelFields);
            value = result?.callStartTime ?? value;
          }
          if (errors.callStartTime?.hasError) {
            runValidationTasks("callStartTime", value);
          }
          setCallStartTime(value);
        }}
        onBlur={() => runValidationTasks("callStartTime", callStartTime)}
        errorMessage={errors.callStartTime?.errorMessage}
        hasError={errors.callStartTime?.hasError}
        {...getOverrideProps(overrides, "callStartTime")}
      ></TextField>
      <TextField
        label="Call end time"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={callEndTime && convertToLocal(new Date(callEndTime))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              tenantId,
              callRecordId,
              callType,
              callStartTime,
              callEndTime: value,
              callDuration,
              charge,
              callerNumber,
              calleeNumber,
            };
            const result = onChange(modelFields);
            value = result?.callEndTime ?? value;
          }
          if (errors.callEndTime?.hasError) {
            runValidationTasks("callEndTime", value);
          }
          setCallEndTime(value);
        }}
        onBlur={() => runValidationTasks("callEndTime", callEndTime)}
        errorMessage={errors.callEndTime?.errorMessage}
        hasError={errors.callEndTime?.hasError}
        {...getOverrideProps(overrides, "callEndTime")}
      ></TextField>
      <TextField
        label="Call duration"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={callDuration}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              tenantId,
              callRecordId,
              callType,
              callStartTime,
              callEndTime,
              callDuration: value,
              charge,
              callerNumber,
              calleeNumber,
            };
            const result = onChange(modelFields);
            value = result?.callDuration ?? value;
          }
          if (errors.callDuration?.hasError) {
            runValidationTasks("callDuration", value);
          }
          setCallDuration(value);
        }}
        onBlur={() => runValidationTasks("callDuration", callDuration)}
        errorMessage={errors.callDuration?.errorMessage}
        hasError={errors.callDuration?.hasError}
        {...getOverrideProps(overrides, "callDuration")}
      ></TextField>
      <TextField
        label="Charge"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={charge}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              tenantId,
              callRecordId,
              callType,
              callStartTime,
              callEndTime,
              callDuration,
              charge: value,
              callerNumber,
              calleeNumber,
            };
            const result = onChange(modelFields);
            value = result?.charge ?? value;
          }
          if (errors.charge?.hasError) {
            runValidationTasks("charge", value);
          }
          setCharge(value);
        }}
        onBlur={() => runValidationTasks("charge", charge)}
        errorMessage={errors.charge?.errorMessage}
        hasError={errors.charge?.hasError}
        {...getOverrideProps(overrides, "charge")}
      ></TextField>
      <TextField
        label="Caller number"
        isRequired={true}
        isReadOnly={false}
        value={callerNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tenantId,
              callRecordId,
              callType,
              callStartTime,
              callEndTime,
              callDuration,
              charge,
              callerNumber: value,
              calleeNumber,
            };
            const result = onChange(modelFields);
            value = result?.callerNumber ?? value;
          }
          if (errors.callerNumber?.hasError) {
            runValidationTasks("callerNumber", value);
          }
          setCallerNumber(value);
        }}
        onBlur={() => runValidationTasks("callerNumber", callerNumber)}
        errorMessage={errors.callerNumber?.errorMessage}
        hasError={errors.callerNumber?.hasError}
        {...getOverrideProps(overrides, "callerNumber")}
      ></TextField>
      <TextField
        label="Callee number"
        isRequired={true}
        isReadOnly={false}
        value={calleeNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tenantId,
              callRecordId,
              callType,
              callStartTime,
              callEndTime,
              callDuration,
              charge,
              callerNumber,
              calleeNumber: value,
            };
            const result = onChange(modelFields);
            value = result?.calleeNumber ?? value;
          }
          if (errors.calleeNumber?.hasError) {
            runValidationTasks("calleeNumber", value);
          }
          setCalleeNumber(value);
        }}
        onBlur={() => runValidationTasks("calleeNumber", calleeNumber)}
        errorMessage={errors.calleeNumber?.errorMessage}
        hasError={errors.calleeNumber?.hasError}
        {...getOverrideProps(overrides, "calleeNumber")}
      ></TextField>
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

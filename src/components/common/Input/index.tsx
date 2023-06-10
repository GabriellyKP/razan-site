import { TextField, TextFieldProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

import get from "lodash/get";
import {  PatternFormat } from "react-number-format";

export interface IInputProps
  extends Omit<
    TextFieldProps,
    | "InputLabelProps"
    | "error"
    | "label"
    | "onChange"
    | "placeholder"
    | "type"
    | "value"
  > {
  inputId: string;
  inputLabel?: string;
  required?: boolean;
  disabled?: boolean;
  multiline?: boolean;
  mask?: string
}

export const Input = ({
  inputId,
  inputLabel,
  required = false,
  disabled = false,
  multiline = false,
  type,
  mask,
  sx,
  ...rest
}: IInputProps & TextFieldProps): JSX.Element => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const hasError = Boolean(errors[inputId]);

  return (
    <Controller
      name={inputId}
      control={control}
      render={({ field: { onChange, value = "" } }) => (
      mask? (
        <PatternFormat  
        format={mask} 
        mask="_"
        customInput={TextField} 
        size="small"
        required={required}
        label={inputLabel}
        value={value}
        placeholder={inputLabel}
        multiline={multiline}
        onChange={onChange}
        sx={{ ...sx }}
        error={hasError}
        {...(hasError && {
          helperText: get(errors, `${[inputId]}.message`)?.toString(),
        })}
        {...(disabled && { disabled })}
      />
        ) : 
        <TextField
        variant="outlined"
        size="small"
        type={type}
        required={required}
        label={inputLabel}
        value={value}
        placeholder={inputLabel}
        multiline={multiline}
        onChange={onChange}
        sx={{ ...sx }}
        error={hasError}
        {...(hasError && {
          helperText: get(errors, `${[inputId]}.message`)?.toString(),
        })}
        {...(disabled && { disabled })}
        {...rest}
      />
      )}
      
    />
  );
};

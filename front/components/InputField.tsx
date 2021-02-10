import { FormControl, FormErrorMessage, Input } from "@chakra-ui/react";
import { useField } from "formik";
import React, { InputHTMLAttributes } from "react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  placeholder: string;
  name: string;
};

export const InputField: React.FC<InputFieldProps> = ({
  label,
  size: _,
  ...props
}) => {
  const [field, { error }] = useField(props);
  return (
    <FormControl isInvalid={!!error}>
      <Input
        _placeholder={{ color: "darkGreen", opacity: 0.5 }}
        h="65px"
        mb="25px"
        boxShadow="0px 8px 24px rgba(0, 0, 0, 0.15)"
        {...props}
        {...field}
        label={label}
        color="darkGreen"
        id={field.name}
        _focus={{ boxShadow: "0 0 0 2px softGreen !important" }}
        borderRadius="5px"
      />
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};

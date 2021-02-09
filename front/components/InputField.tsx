import { Input } from "@chakra-ui/react";
import React, { InputHTMLAttributes } from "react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  placeholder: string;
  name: string;
};

export const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  name,
}) => {
  return (
    <Input
      h="70px"
      mb="38px"
      boxShadow="0px 8px 24px rgba(0, 0, 0, 0.15)"
      name={name}
      placeholder={placeholder}
      label={label}
      _focus={{ boxShadow: "0 0 0 2px softGreen !important" }}
    />
  );
};

import { Box, Text } from "@chakra-ui/react";
import { Field } from "formik";
import React, { InputHTMLAttributes } from "react";

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export const CheckboxComponent: React.FC<CheckboxProps> = ({ name, label }) => {
  return (
    <Box>
      <Field
        mb="1rem"
        type="checkbox"
        name={name}
        style={{ transform: "scale(1.3)", marginRight: "10px" }}
        id="checkbox"
      />
      <Text as="span" color="softGreen">
        {label}
      </Text>
    </Box>
  );
};

export default CheckboxComponent;

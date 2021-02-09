import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { Input } from "@chakra-ui/react";
import React from "react";
import { InputField } from "../components/InputField";

interface loginProps {}

export const Login: React.FC<loginProps> = ({}) => {
  return (
    <Grid placeItems="center" w="100%" h="100vh">
      <Flex w={950} h={600}>
        <FormSection></FormSection>
        <GraphicsSection></GraphicsSection>
      </Flex>
    </Grid>
  );
};

interface formSectionProps {}

const FormSection: React.FC<formSectionProps> = ({}) => {
  return (
    <Box flex={1}>
      <Formik
        initialValues={{ usernameOrEmail: "", password: "" }}
        onSubmit={async (values) => {
          console.log(values);
          return {
            usernameOrEmail: values.usernameOrEmail,
            password: values.password,
          };
        }}
      >
        {(props) => (
          <Form>
            <InputField
              name="usernameOrEmail"
              placeholder="Username Or Email"
              label="Username Or Email"
            />
            <InputField
              name="password"
              placeholder="Password"
              label="Password"
            />
            <Button
              d="block"
              p="relative"
              m="0 auto"
              mt={4}
              boxShadow="0px 8px 24px rgba(0, 0, 0, 0.15)"
              isLoading={props.isSubmitting}
              color="white"
              bg="softGreen"
              _hover={{ bg: "lightGreen", color: "darkGreen" }}
              type="submit"
              w="400px"
              h={16}
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

interface graphicSectionProps {}

const GraphicsSection: React.FC<graphicSectionProps> = ({}) => {
  return <Box flex={1}></Box>;
};

export default Login;

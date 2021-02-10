import { Box, Flex, Grid, Link, Text } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import NextLink from "next/link";
import React from "react";
import Button from "../components/Button";
import { InputField } from "../components/InputField";
import BookSVG from "../public/RegisterGraphics/BookSVG";

export const Register: React.FC<{}> = ({}) => {
  return (
    <>
      <Grid placeItems="center" w="100%" h="100vh">
        <Flex
          w={["100%", 450, 950]}
          pl={5}
          pr={5}
          h={600}
          flexDir={{ base: "column", md: "row" }}
        >
          <FormSection />
          <GraphicsSection />
        </Flex>
      </Grid>
    </>
  );
};

interface formSectionProps {}

const FormSection: React.FC<formSectionProps> = ({}) => {
  return (
    <Box flex={1} d="flex" flexDir="column">
      <Box>
        <Text
          fontSize="43px"
          color="softGreen"
          fontWeight={"bold"}
          mt={"-40px"}
          mb={"50px"}
        >
          <Text as="h1" fontFamily="Selawik">
            Register
          </Text>
        </Text>
        <Formik
          initialValues={{
            email: "",
            username: "",
            password: "",
            rememberMe: false,
          }}
          onSubmit={async (values) => {
            console.log(values);
            return {
              ...values,
            };
          }}
        >
          {(props) => (
            <Form>
              <InputField
                name="email"
                type="email"
                placeholder="Email"
                label="email"
              />
              <InputField
                name="username"
                placeholder="Username"
                label="username"
              />
              <InputField
                name="password"
                placeholder="Password"
                label="Password"
                type="password"
              />

              <Button desc="" isLoading={props.isSubmitting}>
                Register
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
      <Box mt={"auto"} textAlign="center" color="softGreen">
        Already have an account?{" "}
        <NextLink href="/login">
          <Link textDecor="underline">
            <strong>Sign in</strong>
          </Link>
        </NextLink>
      </Box>
    </Box>
  );
};

interface graphicSectionProps {}

const GraphicsSection: React.FC<graphicSectionProps> = ({}) => {
  return (
    <Box
      flex={[0.5, 1]}
      display="flex"
      justifyContent="center"
      alignContent="center"
      ml={[0, 10]}
    >
      <BookSVG />
    </Box>
  );
};

export default Register;

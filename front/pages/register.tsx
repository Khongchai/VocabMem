import { Box, Flex, Grid, Link, Text } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import NextLink from "next/link";
import React from "react";
import Button from "../components/Button";
import { InputField } from "../components/InputField";
import PencilWritingBook from "../public/RegisterGraphics/pencilWritingBook";
import BookSVG from "../public/RegisterGraphics/svgComponents/BookSVG";

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
          mb={"30px"}
          as="h1"
          fontFamily="Selawik"
        >
          Register
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
      <Box mt={["10px", null, "auto"]} textAlign="center" color="softGreen">
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
      mt={2}
      ml={[0, 0, 10]}
      paddingBottom={[2, 2, 0]}
    >
      <PencilWritingBook />
    </Box>
  );
};

export default Register;

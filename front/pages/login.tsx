import { Box, Flex, Grid, Text, Link } from "@chakra-ui/react";
import Checkbox from "../components/Checkbox";
import { Form, Formik } from "formik";
import React from "react";
import { InputField } from "../components/InputField";
import Button from "../components/Button";
import NextLink from "next/link";
import CatSVG from "../public/loginGraphics/CatInSpaceSVG";
import { useMutation } from "urql";

interface loginProps {}

export const Login: React.FC<loginProps> = ({}) => {
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
          Login
        </Text>
        <Formik
          initialValues={{
            usernameOrEmail: "",
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
                name="usernameOrEmail"
                placeholder="Username or Email"
                label="Username Or Email"
              />
              <InputField
                name="password"
                placeholder="Password"
                label="Password"
                type="password"
              />
              <Checkbox name="rememberMe" label="Remember me" />

              <Button desc="Forgot password?" isLoading={props.isSubmitting}>
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
      <Box mt={["auto"]} textAlign="center" color="softGreen">
        Don't have an account?{" "}
        <NextLink href="/register">
          <Link textDecor="underline">
            <strong>Register</strong>
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
      flex={[null, null, 1]}
      display={["none", null, "flex"]}
      justifyContent="center"
      alignContent="center"
      ml={[0, 10]}
      position={["relative"]}
      top="-85px"
      right="-74px"
      zIndex="-1"
    >
      <CatSVG />
    </Box>
  );
};

export default Login;

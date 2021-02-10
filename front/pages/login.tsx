import { Box, Flex, Grid, Text, Link } from "@chakra-ui/react";
import Checkbox from "../components/Checkbox";
import { Form, Formik } from "formik";
import React from "react";
import { InputField } from "../components/InputField";
import Button from "../components/Button";
import NextLink from "next/link";
import CatSVG from "../public/loginGraphics/CatInSpaceSVG";

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
          mt={"-40px"}
          mb={"50px"}
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
                placeholder="Username Or Email"
                label="Username Or Email"
              />
              <InputField
                name="password"
                placeholder="Password"
                label="Password"
              />
              <Checkbox name="rememberMe" label="Remember me" />

              <Button isLoading={props.isSubmitting}>Login</Button>
            </Form>
          )}
        </Formik>
      </Box>
      <Box mt={"auto"} textAlign="center" color="softGreen">
        Don't have an account?{" "}
        <NextLink href="/forgot-password">
          <Link textDecor="underline">sign up</Link>
        </NextLink>
      </Box>
    </Box>
  );
};

interface graphicSectionProps {}

const GraphicsSection: React.FC<graphicSectionProps> = ({}) => {
  return (
    <Box flex={[0.5, 1]} ml={10}>
      <CatSVG />
    </Box>
  );
};

export default Login;

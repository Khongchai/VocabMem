import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import fonts from "../public/fonts/font-face";
import { Global } from "@emotion/react";

function MyApp({ Component, pageProps }: any) {
  return (
    <ChakraProvider theme={theme}>
      <Global styles={fonts} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

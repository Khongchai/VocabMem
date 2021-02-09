import { extendTheme } from "@chakra-ui/react";

const colors = {
  lightGreen: "#DAF1E8",
  softGreen: "#44B78B",
  yellow: "#FFBE55",
  yellowishOrange: "#FF9843",
  peach: "#E56353",
  cherry: "#D9195C",
  taro: "#7D5463",
  darkGreen: "#0C4B33",
  superDarkGreen: "#031D13",
};
const Input = {
  parts: ["field"],
  baseStyle: {
    field: {
      color: "softGreen",
    },
  },
  defaultProps: {
    colorScheme: "softGreen",
  },
};

const theme = extendTheme({ colors, components: { Input } });
export default theme;

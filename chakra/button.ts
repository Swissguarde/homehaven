import type { ComponentStyleConfig } from "@chakra-ui/theme";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "5px",
    fontSize: "10pt",
    fontWeight: 500,
    _focus: {
      boxShadow: "none",
    },
  },
  sizes: {
    sm: {
      fontSize: "8pt",
    },
    md: {
      fontSize: "10pt",
      height: "28px",
    },
  },
  variants: {
    solid: {
      color: "white",
      bg: "blue.400",
      _hover: {
        bg: "blue.400",
      },
    },
    outline: {
      color: "blue.400",
      border: "1px solid",
      borderColor: "blue.400",
    },
    oauth: {
      height: "34px",
      border: "1px solid",
      borderColor: "gray.300",
      _hover: {
        bg: "gray.50",
      },
    },
  },
};

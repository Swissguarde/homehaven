import { extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins";
import { Button } from "./button";

export const theme = extendTheme({
  fonts: {
    body: "Poppins",
  },
  components: {
    Button,
  },
});

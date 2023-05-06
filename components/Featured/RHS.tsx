import { Box, Text } from "@chakra-ui/react";
import React from "react";

type RHSProps = {};

const RHS: React.FC<RHSProps> = () => {
  return (
    <Box bg="white" border="1px solid red" padding="20px 0">
      <Text fontSize="14pt">Featured Listings</Text>
    </Box>
  );
};
export default RHS;

import React from "react";
import { Box, Divider, Flex, Input, Text } from "@chakra-ui/react";

type FormCProps = {};

const FormC: React.FC<FormCProps> = () => {
  return (
    <Box bg="white" my={10} padding="20px" rounded="14px" boxShadow="md">
      <Box pb={4}>
        <Text fontSize={{ lg: "12pt" }}>Details</Text>
      </Box>
      <Divider />

      <Flex
        mt={10}
        flexDirection={{ base: "column", lg: "row" }}
        justify="space-between"
      >
        <Box width="100%" mr={{ lg: 8 }}>
          <Text fontWeight={600}>Bedrooms *</Text>
          <Input
            //   onChange={handleChange}
            required
            name="bedrooms"
            placeholder="Enter number of bedrooms"
            type="number"
            mt={2}
            mb={10}
            fontSize="10pt"
            _placeholder={{ color: "gray.500" }}
            _hover={{
              bg: "white",
              border: "1px solid",
              borderColor: "blue.500",
            }}
            _focus={{
              outline: "none",
              bg: "white",
              border: "1px solid",
              borderColor: "blue.500",
            }}
            bg="gray.50"
          />
        </Box>
        <Box width="100%">
          <Text fontWeight={600}>Bathrooms *</Text>
          <Input
            //   onChange={handleChange}
            required
            name="bathrooms"
            placeholder="Enter number of bathrooms"
            type="number"
            mt={2}
            mb={10}
            fontSize="10pt"
            _placeholder={{ color: "gray.500" }}
            _hover={{
              bg: "white",
              border: "1px solid",
              borderColor: "blue.500",
            }}
            _focus={{
              outline: "none",
              bg: "white",
              border: "1px solid",
              borderColor: "blue.500",
            }}
            bg="gray.50"
          />
        </Box>
      </Flex>
    </Box>
  );
};
export default FormC;

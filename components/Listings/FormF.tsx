import {
  Box,
  Divider,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";

type FormFProps = {};

const FormF: React.FC<FormFProps> = () => {
  return (
    <Box bg="white" my={10} padding="20px" rounded="14px" boxShadow="md">
      <Box pb={4}>
        <Text fontSize={{ lg: "12pt" }}>Property Details</Text>
      </Box>
      <Divider mb={10} />

      <Box>
        <Flex justifyContent="space-between" mb={4}>
          <Text fontSize={{ base: "10pt", lg: "12pt" }}>
            Do you want to mark this property as featured?
          </Text>
          <RadioGroup>
            <Stack direction="row">
              <Radio value="1">Yes</Radio>
              <Radio value="2">No</Radio>
            </Stack>
          </RadioGroup>
        </Flex>
        <Divider mb={4} />
        <Flex justifyContent="space-between" mb={4}>
          <Text fontSize={{ base: "10pt", lg: "12pt" }}>
            The user must be logged in to view this property?
          </Text>
          <RadioGroup>
            <Stack direction="row">
              <Radio value="yes">Yes</Radio>
              <Radio value="no">No</Radio>
            </Stack>
          </RadioGroup>
        </Flex>
        <Divider mb={4} />
        <Text>Disclaimer</Text>
        <Textarea
          name="disclaimer"
          //   onChange={handleChange}
          mt={2}
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
    </Box>
  );
};
export default FormF;

import {
  Flex,
  Grid,
  GridItem,
  Input,
  Select,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

type FormAProps = {};

const FormA: React.FC<FormAProps> = () => {
  return (
    <>
      <Flex flexDirection="column" justify="center" mt={10}>
        <Text fontWeight={600}>Property Title *</Text>
        <Input
          //   onChange={handleChange}
          required
          name="title"
          placeholder="Enter your property title"
          type="text"
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
      </Flex>
      <Flex flexDirection="column" justify="center" mt={10}>
        <Text fontWeight={600}>Property Description *</Text>
        <Textarea
          name="description"
          //   onChange={handleChange}
          mt={2}
          placeholder="Enter your property's description"
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
      </Flex>
      <Grid
        mt={10}
        mb={30}
        gridTemplateColumns={{ base: "(repeat, 1fr)", md: "repeat(3, 1fr)" }}
        gap={6}
      >
        <GridItem>
          <Stack mb={2}>
            <Text fontWeight={600}>Type</Text>
            <Select placeholder="Select option">
              <option value="option1">Commercial</option>
              <option value="option2">Residential</option>
            </Select>
          </Stack>
        </GridItem>

        <GridItem>
          <Stack mb={2}>
            <Text fontWeight={600}>Status</Text>
            <Select placeholder="Select option">
              <option value="option1">For Rent</option>
              <option value="option2">For Sale</option>
            </Select>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack mb={2}>
            <Text fontWeight={600}>Label</Text>
            <Select placeholder="Select option">
              <option value="option1">Hot Offer</option>
              <option value="option2">Open House</option>
              <option value="option2">Sold</option>
            </Select>
          </Stack>
        </GridItem>
      </Grid>
    </>
  );
};
export default FormA;

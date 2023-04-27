import {
  Box,
  Divider,
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

type FormAProps = {
  formData: {
    propertyTitle: string;
    propertyDescription: string;
    propertyType: string;
    propertyStatus: string;
    propertyLabel: string;
  };
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
};

const FormA: React.FC<FormAProps> = ({ formData, handleChange }) => {
  const {
    propertyDescription,
    propertyLabel,
    propertyStatus,
    propertyTitle,
    propertyType,
  } = formData;
  return (
    <Flex
      flexDirection="column"
      bg="white"
      my={10}
      padding="20px"
      rounded="14px"
      boxShadow="md"
    >
      <Box pb={4}>
        <Text fontSize={{ lg: "12pt" }}>Description</Text>
      </Box>
      <Divider />
      <Flex flexDirection="column" justify="center" mt={10}>
        <Text>Property Title *</Text>
        <Input
          required
          name="propertyTitle"
          value={propertyTitle}
          onChange={handleChange}
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
        <Text>Property Description *</Text>
        <Textarea
          name="propertyDescription"
          value={propertyDescription}
          onChange={handleChange}
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
            <Text>Type</Text>
            <Select
              placeholder="Select option"
              name="propertyType"
              value={propertyType}
              onChange={handleChange}
            >
              <option value="commercial">Commercial</option>
              <option value="residential">Residential</option>
            </Select>
          </Stack>
        </GridItem>

        <GridItem>
          <Stack mb={2}>
            <Text>Status</Text>
            <Select
              placeholder="Select option"
              name="propertyStatus"
              value={propertyStatus}
              onChange={handleChange}
            >
              <option value="forRent">For Rent</option>
              <option value="forSale">For Sale</option>
            </Select>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack mb={2}>
            <Text>Label</Text>
            <Select
              placeholder="Select option"
              name="propertyLabel"
              value={propertyLabel}
              onChange={handleChange}
            >
              <option value="hotOffer">Hot Offer</option>
              <option value="openHouse">Open House</option>
            </Select>
          </Stack>
        </GridItem>
      </Grid>
    </Flex>
  );
};
export default FormA;

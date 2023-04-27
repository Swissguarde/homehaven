import { Box, Divider, Grid, GridItem, Input, Text } from "@chakra-ui/react";
import React from "react";

type FormCProps = {
  formData: {
    bedrooms: string;
    bathrooms: string;
    areaSize: string;
    postFix: string;
    landArea: string;
    areaPostFix: string;
    garages: string;
    garageSize: string;
    yearBuilt: string;
  };
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
};

const FormC: React.FC<FormCProps> = ({ formData, handleChange }) => {
  const {
    bedrooms,
    bathrooms,
    areaPostFix,
    areaSize,
    garageSize,
    garages,
    landArea,
    postFix,
    yearBuilt,
  } = formData;
  return (
    <Box bg="white" my={10} padding="20px" rounded="14px" boxShadow="md">
      <Box pb={4}>
        <Text fontSize={{ lg: "12pt" }}>Details</Text>
      </Box>
      <Divider mb={10} />

      <Grid
        gridTemplateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
        gap={6}
      >
        <GridItem>
          <Text>Bedrooms</Text>
          <Input
            required
            name="bedrooms"
            value={bedrooms}
            onChange={handleChange}
            placeholder="Enter number of bedrooms"
            type="number"
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
            mt={2}
          />
        </GridItem>
        <GridItem>
          <Text>Bathrooms</Text>
          <Input
            required
            name="bathrooms"
            value={bathrooms}
            onChange={handleChange}
            placeholder="Enter number of bathrooms"
            type="number"
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
            mt={2}
          />
        </GridItem>
        <GridItem>
          <Text>Area Size *</Text>
          <Input
            required
            name="areaSize"
            value={areaSize}
            onChange={handleChange}
            placeholder="Enter property area size"
            type="number"
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
            mt={2}
          />
        </GridItem>
        <GridItem>
          <Text>Size Postfix</Text>
          <Input
            required
            name="postFix"
            value={postFix}
            onChange={handleChange}
            type="text"
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
            mt={2}
          />
        </GridItem>
        <GridItem>
          <Text>Land Area</Text>
          <Input
            required
            name="landArea"
            value={landArea}
            onChange={handleChange}
            placeholder="Enter property land area"
            type="number"
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
            mt={2}
          />
        </GridItem>
        <GridItem>
          <Text>Land Area Size Postfix</Text>
          <Input
            required
            name="areaPostFix"
            value={areaPostFix}
            onChange={handleChange}
            type="text"
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
            mt={2}
          />
        </GridItem>
        <GridItem>
          <Text>Garages</Text>
          <Input
            required
            name="garages"
            value={garages}
            onChange={handleChange}
            type="number"
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
            mt={2}
          />
        </GridItem>
        <GridItem>
          <Text>Garage Size</Text>
          <Input
            required
            name="garageSize"
            value={garageSize}
            onChange={handleChange}
            type="number"
            fontSize="10pt"
            placeholder="Enter the garage size"
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
            mt={2}
          />
        </GridItem>
        <GridItem>
          <Text>Year Built</Text>
          <Input
            required
            name="yearBuilt"
            value={yearBuilt}
            onChange={handleChange}
            type="number"
            fontSize="10pt"
            placeholder="Enter year built"
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
            mt={2}
          />
        </GridItem>
      </Grid>
    </Box>
  );
};
export default FormC;

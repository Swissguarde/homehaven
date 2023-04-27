import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

type FormEProps = {};

const FormE: React.FC<FormEProps> = () => {
  return (
    <>
      <Box bg="white" my={10} padding="20px" rounded="14px" boxShadow="md">
        <Box pb={4}>
          <Text fontSize={{ lg: "12pt" }}>Location</Text>
        </Box>
        <Divider mb={10} />

        <Grid
          gridTemplateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
          gap={6}
        >
          <GridItem>
            <Text>Address *</Text>
            <Input
              required
              name="address"
              placeholder="Enter your property address"
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
            <Text>Country</Text>
            <Input
              required
              name="country"
              placeholder="Enter the country"
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
            <Text>State / County</Text>
            <Input
              required
              name="state"
              placeholder="Enter the state / county"
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
            <Text>City</Text>
            <Input
              required
              name="city"
              placeholder="Enter the city"
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
            <Text>Area</Text>
            <Input
              required
              name="area"
              placeholder="Enter the area"
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
            <Text>Zip / Postal Code</Text>
            <Input
              required
              name="postalCode"
              placeholder="Enter zip / postal code"
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
        </Grid>
      </Box>
      <Box bg="white" my={10} padding="20px" rounded="14px" boxShadow="md">
        <Box pb={4}>
          <Text fontSize={{ lg: "12pt" }}>Map</Text>
        </Box>
        <Divider mb={10} />

        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          width="100%"
          gap={6}
        >
          <Box
            width="100%"
            height="200px"
            flex={1}
            border="1px"
            borderColor="blue.300"
          ></Box>

          <Stack width="100%" flex={1}>
            <Text>Latitude</Text>
            <Input
              required
              name="area"
              placeholder="Enter address latitude"
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
            <Text>Longitude</Text>
            <Input
              required
              name="area"
              placeholder="Enter address longitude"
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
          </Stack>
        </Flex>
      </Box>
    </>
  );
};
export default FormE;

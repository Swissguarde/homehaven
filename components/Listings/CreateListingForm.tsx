import {
  Box,
  Button,
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

type CreateListingFormProps = {};

const CreateListingForm: React.FC<CreateListingFormProps> = () => {
  return (
    <Box mt={{ base: 24, md: 32 }} paddingX={{ base: "20px", md: "50px" }}>
      <Flex
        align="center"
        justify="space-between"
        bg="white"
        padding="20px"
        rounded="14px"
      >
        <Text fontSize={{ lg: "14pt" }} fontWeight={600}>
          Create A Listing
        </Text>
        <Button variant="outline" height="36px">
          Save as Draft
        </Button>
      </Flex>

      <Flex
        flexDirection="column"
        bg="white"
        mt={10}
        mb={80}
        padding="20px"
        rounded="14px"
      >
        <Box pb={4}>
          <Text fontSize={{ lg: "12pt" }}>Description</Text>
        </Box>
        <Divider />

        <Flex flexDirection="column" justify="center" mt={10}>
          <Text fontWeight={600}>Property Title *</Text>
          <Input
            // onChange={handleChange}
            required
            name="text"
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
      </Flex>
      <Flex
        position="fixed"
        align="center"
        justify="space-between"
        bottom="0"
        left="0"
        paddingX={{ base: "20px", md: "50px" }}
        paddingY={5}
        width="100%"
        bg="gray.100"
        height="fit-content"
        border="1px"
        borderTopColor="blue.100"
      >
        <Button variant="outline" height="36px" width="100px">
          Cancel
        </Button>
        <Button variant="solid" height="36px" width="100px">
          Next
        </Button>
      </Flex>
    </Box>
  );
};
export default CreateListingForm;

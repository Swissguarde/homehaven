import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Icon,
  Input,
  Select,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import FormA from "./FormA";
import FormB from "./FormB";
import FormC from "./FormC";

type CreateListingFormProps = {};

const CreateListingForm: React.FC<CreateListingFormProps> = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "commercial",
    status: "For Sale",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {};

  return (
    <Box
      mt={{ base: 24, md: 32 }}
      paddingX={{ base: "20px", md: "50px" }}
      pb="200px"
    >
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
        my={10}
        padding="20px"
        rounded="14px"
        boxShadow="md"
      >
        <Box pb={4}>
          <Text fontSize={{ lg: "12pt" }}>Description</Text>
        </Box>
        <Divider />

        <FormA />
      </Flex>
      <FormB />
      <FormC />

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

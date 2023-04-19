import { Box, Button, Divider, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { BiImageAdd } from "react-icons/bi";

type FormBProps = {};

const FormB: React.FC<FormBProps> = () => {
  return (
    <>
      <Flex
        flexDirection="column"
        bg="white"
        my={10}
        padding="20px"
        rounded="14px"
      >
        <Box>
          <Box pb={4}>
            <Text fontSize={{ lg: "12pt" }}>Media</Text>
          </Box>
          <Divider />

          <Box mt={10}>
            <Text>
              Drag and drop the images to customize the image gallery order.
            </Text>

            <Box
              mt={8}
              bg="gray.200"
              border="4px"
              borderColor="gray.400"
              borderStyle="dashed"
              height={{ base: "250px", lg: "350px" }}
              width="100%"
            >
              <Flex
                flexDirection="column"
                alignItems="center"
                justify="center"
                height="100%"
                paddingX="20px"
              >
                <Icon fontSize="50pt" as={BiImageAdd} color="gray.500" />
                <Text
                  textAlign="center"
                  fontWeight={700}
                  fontSize={{ base: "9pt", md: "12pt" }}
                  mb={4}
                >
                  Drag and drop the gallery images here
                </Text>
                <Button
                  variant="solid"
                  height="34px"
                  width={{ base: "70px", md: "110px" }}
                  mr={2}
                  padding="5px"
                >
                  Upload
                </Button>
              </Flex>
            </Box>
          </Box>

          {/* <Button onChange={handleChange}> Rent</Button> */}
        </Box>
      </Flex>
    </>
  );
};
export default FormB;

import React from "react";
import { Box, Flex, Grid, GridItem, Icon, Image, Text } from "@chakra-ui/react";
import { TfiQuoteLeft } from "react-icons/tfi";

type TestimonialsProps = {};

const Testimonials: React.FC<TestimonialsProps> = () => {
  return (
    <Box
      mt={60}
      bgColor="white"
      paddingX={{ base: "40px", lg: "100px" }}
      paddingTop={24}
      paddingBottom={40}
    >
      <Flex flexDirection="column" textAlign="center">
        <Text mb={4} fontSize={{ base: "17pt", md: "20pt" }}>
          Testimonials
        </Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit</Text>
      </Flex>
      <Grid
        mt={14}
        gridTemplateColumns={{ base: "(repeat, 1fr)", md: "repeat(3, 1fr)" }}
        width="100%"
        gap={6}
        alignItems="center"
        justifyContent="center"
      >
        <GridItem
          bg="gray.100"
          p={6}
          boxShadow="md"
          borderRadius="4px"
          height={{ base: "320px", md: "400px", lg: "320px" }}
        >
          <Flex flexDirection="column">
            <Box mb={2}>
              <Icon fontSize={{ base: 24, md: 33 }} as={TfiQuoteLeft} />
            </Box>

            <Box fontSize={{ base: "9pt", md: "12pt" }}>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </Box>

            <Flex align="center" mt={8}>
              <Image
                src="/images/avatar1.jpg"
                borderRadius="50%"
                height={{ base: "100px", md: "60px", lg: "100px" }}
                mr={6}
                objectFit="cover"
              />
              <Text
                fontWeight={600}
                textDecoration="underline"
                fontSize={{ base: "8pt", md: "11pt" }}
              >
                by Roy Bennett Manager, Company Inc.
              </Text>
            </Flex>
          </Flex>
        </GridItem>
        <GridItem
          bg="gray.100"
          p={6}
          boxShadow="md"
          borderRadius="4px"
          height={{ base: "320px", md: "400px", lg: "320px" }}
        >
          <Flex flexDirection="column">
            <Box mb={2}>
              <Icon fontSize={{ base: 24, md: 33 }} as={TfiQuoteLeft} />
            </Box>

            <Box fontSize={{ base: "9pt", md: "12pt" }}>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </Box>

            <Flex align="center" mt={8}>
              <Image
                src="/images/avatar2.jpg"
                borderRadius="50%"
                height={{ base: "100px", md: "60px", lg: "100px" }}
                mr={6}
                objectFit="cover"
              />
              <Text
                fontWeight={600}
                textDecoration="underline"
                fontSize={{ base: "8pt", md: "11pt" }}
              >
                by Kenya Soval Realtor, Company Inc.
              </Text>
            </Flex>
          </Flex>
        </GridItem>
        <GridItem
          bg="gray.100"
          p={6}
          boxShadow="md"
          borderRadius="4px"
          height={{ base: "320px", md: "400px", lg: "320px" }}
        >
          <Flex flexDirection="column">
            <Box mb={2}>
              <Icon fontSize={{ base: 24, md: 33 }} as={TfiQuoteLeft} />
            </Box>

            <Box fontSize={{ base: "9pt", md: "12pt" }}>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </Box>

            <Flex align="center" mt={8}>
              <Image
                src="/images/avatar3.jpg"
                borderRadius="50%"
                height={{ base: "100px", md: "60px", lg: "100px" }}
                mr={6}
                objectFit="cover"
              />
              <Text
                fontWeight={600}
                textDecoration="underline"
                fontSize={{ base: "8pt", md: "11pt" }}
              >
                by Kathleen Peterson Manager, Company Inc.
              </Text>
            </Flex>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};
export default Testimonials;

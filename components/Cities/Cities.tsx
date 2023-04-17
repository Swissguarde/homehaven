import React from "react";
import { Box, Flex, Grid, GridItem, Icon, Image, Text } from "@chakra-ui/react";
import { FiPlay } from "react-icons/fi";
import { motion } from "framer-motion";
type CitiesProps = {};

const Cities: React.FC<CitiesProps> = () => {
  const citiesInfo = [
    { id: "1", city: "Chicago", properties: 13, image: "/images/beach.jpg" },
    { id: "2", city: "Amsterdam", properties: 23, image: "/images/hero2.jpg" },
    { id: "3", city: "New Haven", properties: 14, image: "/images/hero3.jpg" },
    { id: "4", city: "New Haven", properties: 14, image: "/images/beach.jpg" },
  ];
  return (
    <Box mt={64} paddingX={{ base: "40px", md: "50px" }} bg="white" py={20}>
      <Grid
        gridTemplateColumns={{ base: "(repeat, 1fr)", md: "repeat(5, 1fr)" }}
        height="100%"
        width="100%"
        gap={4}
      >
        <GridItem alignSelf="center">
          <Flex flexDirection="column">
            <Text fontSize="18pt" mb={4}>
              Explore Cities
            </Text>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
              maiores fuga laudantium aspernatur.
            </Text>
          </Flex>
        </GridItem>

        {citiesInfo.map((city, index) => (
          <GridItem
            key={city.id}
            position="relative"
            color="white"
            height={{ base: "250px", md: "300px", lg: "500px" }}
          >
            <Image
              src={city.image}
              borderRadius="5px"
              height="100%"
              objectFit="cover"
            />
            <Flex
              flexDirection="column"
              position="absolute"
              top={{ base: 4, md: 8 }}
              padding="14px"
            >
              <Text fontSize="9pt">{city.properties} Properties</Text>
              <Text
                letterSpacing="1px"
                fontSize={{ base: "16pt", md: "12pt", lg: "16pt" }}
              >
                {city.city}
              </Text>
            </Flex>
            <Flex
              justifyContent="space-between"
              position="absolute"
              bottom={{ base: 4, md: 8 }}
              width="100%"
              padding="14px"
            >
              <Box>
                <Text fontSize="9pt">MORE DETAILS</Text>
              </Box>
              <Box>
                <Icon as={FiPlay} />
              </Box>
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};
export default Cities;

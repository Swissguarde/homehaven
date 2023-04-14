import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";

type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  const [images, setImages] = useState([
    "/images/beach.jpg",
    "/images/hero2.jpg",
    "/images/hero3.jpg",
  ]);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImgIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);
  return (
    <Box position="relative" height="100vh">
      <Box
        position="absolute"
        height="100vh"
        width="100%"
        zIndex="-10"
        left="0"
        top="0"
        overflow="hidden"
      >
        <Image
          // src={images[currentImgIndex]}
          src="/images/hero2.jpg"
          objectFit="cover"
          alt="bg-image"
          height={{ base: "75%", md: "90vh" }}
          width="100%"
          // className="animate-zoom"
        />
      </Box>
      <Flex
        paddingX="1.5rem"
        paddingTop={{ base: "8rem", md: "12rem" }}
        align="center"
        justify="center"
        color="white"
        fontSize={{ base: "2.2rem", md: "3rem" }}
        flexDirection="column"
        textAlign="center"
      >
        <Text fontWeight={700}>Welcome To HomeHaven</Text>
        <Text
          fontSize={{ base: "1.125rem", md: "1.5rem" }}
          mt={4}
          maxWidth={{ md: "lg" }}
        >
          Your gateway to a new home. Discover your dream home with HomeHaven.
        </Text>
      </Flex>
      <Box
        position="absolute"
        left="1/2"
        bottom={{ base: "-5rem", md: ".2rem" }}
        paddingX={{ base: "14px", md: "5rem", lg: "10rem" }}
        width="100%"
      >
        <SearchBar />
      </Box>
    </Box>
  );
};
export default Hero;

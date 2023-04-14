import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { BiBath, BiBed } from "react-icons/bi";
import { MdGarage, MdOutlineGarage } from "react-icons/md";
type FeaturedProps = {};

const Featured: React.FC<FeaturedProps> = () => {
  const listings = [
    {
      image: "/images/hero2.jpg",
      price: 250000,
      type: "sale",
      title: "Beautiful 3-Bedroom Home",
      address: "123 Main St, Anytown USA",
      bed: 3,
      bath: 3,
      parking: true,
    },
    {
      image: "/images/hero3.jpg",
      price: 1500,
      type: "rent",
      title: "Spacious 2-Bedroom Apartment",
      address: "456 Elm St, Anytown USA",
      bed: 4,
      bath: 2,
      parking: false,
    },
    {
      image: "/images/beach.jpg",
      price: 450000,
      type: "sale",
      title: "Stunning 4-Bedroom Estate",
      address: "789 Oak St, Anytown USA",
      bed: 7,
      bath: 6,
      parking: true,
    },
    {
      image: "/images/hero2.jpg",
      price: 2000,
      type: "rent",
      title: "Cozy 1-Bedroom Studio",
      address: "12 Maple Ave, Anytown USA",
      bed: 3,
      bath: 3,
      parking: true,
    },
    {
      image: "/images/hero3.jpg",
      price: 350000,
      type: "sale",
      title: "Luxurious 5-Bedroom Mansion",
      address: "34 Pine St, Anytown USA",
      bed: 3,
      bath: 3,
      parking: true,
    },
  ];
  const rowRef = useRef<HTMLDivElement>(null);
  const handleClick = (direction: string) => {
    if (rowRef.current) {
      const { scrollLeft } = rowRef.current;
      const listingWidth = rowRef.current.children[0].clientWidth + 20;
      const scrollAmount = listingWidth;
      const scrollTo =
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  // useEffect(() => {
  //   const intervalId = setInterval(() => handleClick("right"), 5000);
  //   return () => clearInterval(intervalId);
  // }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timer | null = null;
    const handleAutoScroll = () => {
      if (rowRef.current) {
        const { scrollWidth, scrollLeft, clientWidth } = rowRef.current;
        const isAtEnd = scrollWidth - scrollLeft === clientWidth;
        if (isAtEnd) {
          rowRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          handleClick("right");
        }
      }
    };
    intervalId = setInterval(handleAutoScroll, 7000);
    // return () => clearInterval(intervalId as NodeJS.Timer);
  }, []);

  return (
    <Box
      height="450px"
      mt={{ base: 64, md: 32 }}
      paddingX={{ base: "40px", md: "50px" }}
      width="100%"
    >
      <Text fontSize={{ base: "17pt", md: "24pt" }} mb={6} textAlign="center">
        Featured Listings
      </Text>
      <Flex justifyContent="flex-end" mb="10px" width="100%">
        <Button variant="outline" mr={1} onClick={() => handleClick("left")}>
          Prev
        </Button>
        <Button variant="outline" onClick={() => handleClick("right")}>
          Next
        </Button>
      </Flex>
      <Flex height="100%" align="center" ref={rowRef} overflowX="scroll">
        {listings.map((listing, i) => (
          <Box
            bgColor="gray.200"
            key={i}
            position="relative"
            boxShadow="lg"
            height="100%"
            minWidth={{ base: "100%", md: "409px" }}
            mr="20px"
          >
            <Image
              src={listing.image}
              objectFit="cover"
              height="270px"
              width="100%"
            />
            <Flex padding="20px" flexDirection="column">
              <Text>{listing.title}</Text>
              <Text mt={1} fontSize="10pt" color="gray.400">
                {listing.address}
              </Text>
              <Flex mt={4}>
                <Flex align="center" mr={2}>
                  <Icon fontSize="18pt" mr={1} as={BiBed} />
                  <Text>{listing.bed}</Text>
                </Flex>
                <Flex align="center" mr={2}>
                  <Icon fontSize="18pt" mr={1} as={BiBath} />
                  <Text>{listing.bath}</Text>
                </Flex>
                {listing.parking && (
                  <Flex align="center">
                    <Icon fontSize="18pt" mr={1} as={MdGarage} />
                    <Text fontSize={{ base: "9pt" }}>Parking Available</Text>
                  </Flex>
                )}
              </Flex>
            </Flex>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
export default Featured;

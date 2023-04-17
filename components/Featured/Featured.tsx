import { Box, Button, Flex, Icon, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { BiBath, BiBed } from "react-icons/bi";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { MdGarage } from "react-icons/md";
type FeaturedProps = {};
interface Image {
  url: string;
}
interface Listing {
  image: Image[];
  price: number;
  type: "sale" | "rent";
  title: string;
  address: string;
  bed: number;
  bath: number;
  parking: boolean;
}

const Featured: React.FC<FeaturedProps> = () => {
  const listings: Listing[] = [
    {
      image: [{ url: "images/hero3.jpg" }, { url: "images/hero3.jpg" }],
      price: 250000,
      type: "sale",
      title: "Beautiful 3-Bedroom Home",
      address: "123 Main St, Anytown USA",
      bed: 3,
      bath: 3,
      parking: true,
    },
    {
      image: [{ url: "images/beach.jpg" }, { url: "images/hero3.jpg" }],
      price: 1500,
      type: "rent",
      title: "Spacious 2-Bedroom Apartment",
      address: "456 Elm St, Anytown USA",
      bed: 4,
      bath: 2,
      parking: false,
    },
    {
      image: [{ url: "images/hero2.jpg" }, { url: "images/hero3.jpg" }],
      price: 450000,
      type: "sale",
      title: "Stunning 4-Bedroom Estate",
      address: "789 Oak St, Anytown USA",
      bed: 7,
      bath: 6,
      parking: true,
    },
    {
      image: [{ url: "images/hero3.jpg" }, { url: "images/hero2.jpg" }],
      price: 2000,
      type: "rent",
      title: "Cozy 1-Bedroom Studio",
      address: "12 Maple Ave, Anytown USA",
      bed: 3,
      bath: 3,
      parking: true,
    },
    {
      image: [{ url: "images/beach.jpg" }, { url: "images/hero3.jpg" }],
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
  const imageRef = useRef<HTMLDivElement>(null);

  const handleClick = (direction: string) => {
    if (rowRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
      const listingWidth = rowRef.current.children[0].clientWidth + 22;
      const scrollAmount = listingWidth;
      let scrollTo =
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount;

      // If the carousel has reached the end, wrap around to the beginning
      if (scrollTo + clientWidth > scrollWidth) {
        scrollTo = 0;
      }

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };
  const handleImageScroll = (direction: string) => {
    if (imageRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = imageRef.current;
      const imageWidth = imageRef.current.children[0].clientWidth;
      const scrollAmount = imageWidth;
      let scrollTo =
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount;

      // If the carousel has reached the end, wrap around to the beginning
      if (scrollTo + clientWidth > scrollWidth) {
        scrollTo = 0;
      }

      imageRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

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
    return () => clearInterval(intervalId as NodeJS.Timer);
  }, []);

  return (
    <Box
      height="fit-content"
      mt={{ base: 64, md: 32 }}
      paddingX={{ base: "20px", md: "50px" }}
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
      <Flex
        height="100%"
        align="center"
        ref={rowRef}
        overflowX="hidden"
        borderRadius="10px"
      >
        {listings.map((listing, i) => (
          <Box
            bgColor="gray.200"
            key={i}
            // position="relative"
            boxShadow="lg"
            height="100%"
            minWidth={{ base: "100%", md: "410px" }}
            mr={i === listings.length - 1 ? "0" : "20px"}
          >
            <Box position="relative">
              <Flex overflowX="scroll" ref={imageRef}>
                {listing.image.map((url, i) => (
                  <Image
                    key={i}
                    borderRadius="10px"
                    src={url.url}
                    objectFit="cover"
                  />
                ))}
                <Box position="absolute" top="40%" left="4" zIndex="99">
                  <Icon
                    onClick={() => handleImageScroll("left")}
                    fontSize={40}
                    color="blue.400"
                    as={BsChevronLeft}
                  />
                </Box>
                <Box position="absolute" top="40%" right="4" zIndex="99">
                  <Icon
                    onClick={() => handleImageScroll("right")}
                    fontSize={40}
                    color="blue.400"
                    as={BsChevronRight}
                  />
                </Box>
              </Flex>
            </Box>

            {/* <Image
              src="/images/beach.jpg"
              objectFit="cover"
              height="270px"
              width="100%"
            /> */}
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

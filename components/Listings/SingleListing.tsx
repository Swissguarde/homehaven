import React from "react";
import { Listing } from "@/atoms/listingsAtom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Box, Divider, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { BiBath, BiBed, BiMapAlt } from "react-icons/bi";
import { MdGarage } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";

type SingleListingProps = {
  listingData: Listing;
};

const SingleListing: React.FC<SingleListingProps> = ({ listingData }) => {
  const {
    propertyTitle,
    propertyDescription,
    propertyType,
    bedrooms,
    bathrooms,
    garages,
    area,
    yearBuilt,
    areaSize,
    address,
    stateOrCounty,
    city,
    zipOrPostal,
    country,
  } = listingData;
  return (
    <Box pb="3000px">
      <Splide
        options={{
          height: "30rem",
          rewind: true,
          gap: "1rem",
          autoplay: true,
          arrows: true,
        }}
      >
        {listingData.imageURLs.map((url, i) => (
          <SplideSlide key={i}>
            <Image src={url} objectFit="cover" objectPosition="center" />
          </SplideSlide>
        ))}
      </Splide>

      <Box mt={10} p={10} bg="white">
        <Text fontSize="13pt">Overview</Text>
        <Divider color="black" my={6} />

        <Flex align="center" justifyContent="space-between">
          <Flex flexDir="column">
            <Text textTransform="capitalize" fontWeight={600}>
              {propertyType}
            </Text>
            <Text>Property Type</Text>
          </Flex>
          <Flex flexDir="column">
            <Flex align="center">
              <Icon as={BiBed} mr={2} color="gray.600" />
              <Text fontWeight={600}>{bedrooms}</Text>
            </Flex>
            <Text color="gray.600">Bedrooms</Text>
          </Flex>
          <Flex flexDir="column">
            <Flex align="center">
              <Icon as={BiBath} mr={2} color="gray.600" />
              <Text fontWeight={600}>{bathrooms}</Text>
            </Flex>
            <Text color="gray.600">Bathrooms</Text>
          </Flex>
          <Flex flexDir="column">
            <Flex align="center">
              <Icon as={MdGarage} mr={2} color="gray.600" />
              <Text fontWeight={600}>{garages}</Text>
            </Flex>
            <Text color="gray.600">Garage</Text>
          </Flex>
          <Flex flexDir="column">
            <Flex align="center">
              <Icon as={BiMapAlt} mr={2} color="gray.600" />
              <Text fontWeight={600}>{areaSize}</Text>
            </Flex>
            <Text color="gray.600">sqft</Text>
          </Flex>
          <Flex flexDir="column">
            <Flex align="center">
              <Icon as={AiOutlineCalendar} mr={2} color="gray.600" />
              <Text fontWeight={600}>{yearBuilt}</Text>
            </Flex>
            <Text color="gray.600">Year Built</Text>
          </Flex>
        </Flex>
      </Box>

      <Box mt={10} p={10} bg="white">
        <Text fontSize="13pt">Description</Text>
        <Divider color="black" my={6} />

        <Text color="gray.600">{propertyDescription}</Text>
      </Box>

      <Box mt={10} p={10} bg="white">
        <Text fontSize="13pt">Address</Text>
        <Divider color="black" my={6} />

        <Flex alignItems="center" justifyContent="space-between">
          <Flex align="center">
            <Text fontWeight={600} mr={3}>
              Address
            </Text>
            <Text color="gray.600">{address}</Text>
          </Flex>

          <Flex align="center">
            <Text fontWeight={600} mr={3}>
              State/County
            </Text>
            <Text color="gray.600">{stateOrCounty}</Text>
          </Flex>
          <Flex align="center">
            <Text fontWeight={600} mr={3}>
              Zip/Postal
            </Text>
            <Text color="gray.600">{zipOrPostal}</Text>
          </Flex>
          <Flex align="center">
            <Text fontWeight={600} mr={3}>
              City
            </Text>
            <Text color="gray.600">{area}</Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
export default SingleListing;

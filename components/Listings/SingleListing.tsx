import React from "react";
import { Listing } from "@/atoms/listingsAtom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { BiBath, BiBed, BiMapAlt } from "react-icons/bi";
import { MdGarage } from "react-icons/md";
import {
  AiOutlineCalendar,
  AiOutlineHeart,
  AiOutlinePrinter,
  AiOutlineShareAlt,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";

type SingleListingProps = {
  listingData: Listing;
};

const SingleListing: React.FC<SingleListingProps> = ({ listingData }) => {
  const {
    propertyTitle,
    propertyDescription,
    propertyType,
    propertyStatus,
    propertyLabel,
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
    landArea,
    garageSize,
    features,
  } = listingData;
  return (
    <Box padding={{ base: "0px 18px", lg: "20px" }} width="100%">
      <Flex
        py={{ base: 4, lg: 10 }}
        px={{ base: 3, lg: 10 }}
        mb={4}
        bg="white"
        justify="space-between"
      >
        <Flex flexDirection="column" justify="center" mb={4}>
          <Text fontSize={{ lg: "22pt" }}>{propertyTitle}</Text>
          <Text
            height="fit-content"
            width="fit-content"
            color="white"
            py="2px"
            px="6px"
            rounded="sm"
            fontSize="10pt"
            bgColor={propertyStatus === "forRent" ? "green.400" : "gray.600"}
            my={2}
          >
            {propertyStatus === "forRent" ? "FOR RENT" : "FOR SALE"}
          </Text>
          <Flex align="center" my={2} fontSize={{ base: "10pt", lg: "12pt" }}>
            <Icon fontSize={16} as={GoLocation} mr={2} />
            <Text color="gray.600">{address}</Text>
          </Flex>
        </Flex>

        <Flex flexDir="column">
          <Flex align="center" justifyContent="flex-end" gap={1}>
            <Flex
              align="center"
              justify="center"
              p="2px"
              border="1px solid black"
              rounded="lg"
              cursor="pointer"
              _hover={{ bg: "black", color: "white" }}
              transition=".4s ease-in-out"
            >
              <Icon fontSize={20} as={AiOutlineHeart} />
            </Flex>
            <Flex
              align="center"
              justify="center"
              p="2px"
              border="1px solid black"
              rounded="lg"
              cursor="pointer"
              _hover={{ bg: "black", color: "white" }}
              transition=".4s ease-in-out"
            >
              <Icon fontSize={20} as={AiOutlineShareAlt} />
            </Flex>
            <Flex
              align="center"
              justify="center"
              p="2px"
              border="1px solid black"
              rounded="lg"
              cursor="pointer"
              _hover={{ bg: "black", color: "white" }}
              transition=".4s ease-in-out"
            >
              <Icon fontSize={20} as={AiOutlinePrinter} />
            </Flex>
          </Flex>
          <Text
            my={4}
            letterSpacing="1px"
            fontWeight={600}
            fontSize={{ lg: "22pt" }}
          >
            $125,000
          </Text>
        </Flex>
      </Flex>

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
            <Image
              src={url}
              objectFit="cover"
              objectPosition="center"
              height="100%"
              width="100%"
            />
          </SplideSlide>
        ))}
      </Splide>
      <Box mt={10} py={{ base: 4, lg: 10 }} px={{ base: 3, lg: 10 }} bg="white">
        <Text fontSize="13pt">Overview</Text>
        <Divider color="black" my={6} />

        <Grid
          gap={10}
          gridTemplateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
          width="100%"
        >
          <GridItem>
            <Flex flexDir="column">
              <Text textTransform="capitalize" fontWeight={600}>
                {propertyType}
              </Text>
              <Text>Property Type</Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex flexDir="column">
              <Flex align="center">
                <Icon as={BiBed} mr={2} color="gray.600" />
                <Text fontWeight={600}>{bedrooms}</Text>
              </Flex>
              <Text color="gray.600">Bedrooms</Text>
            </Flex>
          </GridItem>

          <GridItem>
            <Flex flexDir="column">
              <Flex align="center">
                <Icon as={BiBath} mr={2} color="gray.600" />
                <Text fontWeight={600}>{bathrooms}</Text>
              </Flex>
              <Text color="gray.600">Bathrooms</Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex flexDir="column">
              <Flex align="center">
                <Icon as={MdGarage} mr={2} color="gray.600" />
                <Text fontWeight={600}>{garages}</Text>
              </Flex>
              <Text color="gray.600">Garage</Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex flexDir="column">
              <Flex align="center">
                <Icon as={BiMapAlt} mr={2} color="gray.600" />
                <Text fontWeight={600}>{areaSize}</Text>
              </Flex>
              <Text color="gray.600">sqft</Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex flexDir="column">
              <Flex align="center">
                <Icon as={AiOutlineCalendar} mr={2} color="gray.600" />
                <Text fontWeight={600}>{yearBuilt}</Text>
              </Flex>
              <Text color="gray.600">Year Built</Text>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
      <Box mt={10} py={{ base: 4, lg: 10 }} px={{ base: 3, lg: 10 }} bg="white">
        <Text fontSize="13pt">Description</Text>
        <Divider color="black" my={6} />

        <Text color="gray.600">{propertyDescription}</Text>
      </Box>
      <Box mt={10} py={{ base: 4, lg: 10 }} px={{ base: 3, lg: 10 }} bg="white">
        <Text fontSize="13pt">Address</Text>
        <Divider color="black" my={6} />

        <Grid
          gridTemplateColumns={{ base: "(repeat, 1fr)", md: "repeat(3, 1fr)" }}
          alignItems="center"
          justifyContent="center"
          gap={10}
        >
          <GridItem>
            <Text fontWeight={600} mr={3}>
              Address:
            </Text>
            <Text color="gray.600">{address}</Text>
          </GridItem>

          <GridItem>
            <Text fontWeight={600} mr={3}>
              State/County:
            </Text>
            <Text color="gray.600">{stateOrCounty}</Text>
          </GridItem>
          <GridItem>
            <Text fontWeight={600} mr={3}>
              Zip/Postal:
            </Text>
            <Text color="gray.600">{zipOrPostal}</Text>
          </GridItem>
          <GridItem>
            <Text fontWeight={600} mr={3}>
              City:
            </Text>
            <Text color="gray.600">{area}</Text>
          </GridItem>
        </Grid>
      </Box>
      <Box mt={10} py={{ base: 4, lg: 10 }} px={{ base: 3, lg: 10 }} bg="white">
        <Text fontSize="13pt">Details</Text>
        <Divider color="black" my={6} />

        <Grid
          gridTemplateColumns={{ base: "(repeat, 1fr)", md: "repeat(2, 1fr)" }}
          py={{ base: 4, lg: 10 }}
          px={{ base: 3, lg: 10 }}
          bg="blue.100"
          border="1px solid"
          borderColor="blue.500"
          rounded="lg"
          justifyContent="center"
          alignItems="center"
          gap={4}
        >
          <Flex justifyContent="space-between" alignItems="center">
            <Text fontWeight={600} mr={2}>
              Price:
            </Text>
            <Text>$125,000</Text>
          </Flex>
          <Flex justifyContent="space-between" alignItems="center">
            <Text fontWeight={600} mr={2}>
              Property Size:
            </Text>
            <Text>{areaSize} sqft</Text>
          </Flex>
          <Flex justifyContent="space-between" alignItems="center">
            <Text fontWeight={600} mr={2}>
              Land Area:
            </Text>
            <Text>{landArea}</Text>
          </Flex>
          <Flex justifyContent="space-between" alignItems="center">
            <Text fontWeight={600} mr={2}>
              Garage:
            </Text>
            <Text>{garages}</Text>
          </Flex>
          <Flex justifyContent="space-between" alignItems="center">
            <Text fontWeight={600} mr={2}>
              Garage Size:
            </Text>
            <Text>{garageSize} sqft</Text>
          </Flex>
          <Flex justifyContent="space-between" alignItems="center">
            <Text fontWeight={600} mr={2}>
              Year Built:
            </Text>
            <Text>{yearBuilt}</Text>
          </Flex>
          <Flex justifyContent="space-between" alignItems="center">
            <Text fontWeight={600} mr={2}>
              Bedrooms:
            </Text>
            <Text>{bedrooms}</Text>
          </Flex>
          <Flex justifyContent="space-between" alignItems="center">
            <Text fontWeight={600} mr={2}>
              Bathrooms:
            </Text>
            <Text>{bathrooms}</Text>
          </Flex>
          <Flex justifyContent="space-between" alignItems="center">
            <Text fontWeight={600} mr={2}>
              Property Status:
            </Text>
            <Text>
              {propertyStatus === "forRent" ? "FOR RENT" : "FOR SALE"}
            </Text>
          </Flex>
          <Flex justifyContent="space-between" alignItems="center">
            <Text fontWeight={600} mr={2}>
              Property Label:
            </Text>
            <Text>
              {propertyLabel === "openHouse" ? "OPEN HOUSE" : "HOT OFFER"}
            </Text>
          </Flex>
        </Grid>
      </Box>
      <Box mt={10} py={{ base: 4, lg: 10 }} px={{ base: 3, lg: 10 }} bg="white">
        <Text fontSize="13pt">Features</Text>
        <Divider color="black" my={6} />

        <Grid
          gridTemplateColumns={{ base: "repeat(1, 2fr)", lg: "repeat(4, 1fr)" }}
          gap={6}
        >
          {features.map((feature, i) => (
            <GridItem>
              <Flex align="center">
                <Icon as={AiOutlineCheckCircle} mr={1} color="green.400" />
                <Text>{feature}</Text>
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
export default SingleListing;

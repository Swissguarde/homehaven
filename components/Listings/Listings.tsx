import { Listing } from "@/atoms/listingsAtom";
import {
  Box,
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlineFieldTime } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { GiBathtub, GiBed, GiHomeGarage } from "react-icons/gi";
import { HiOutlineUser } from "react-icons/hi";

type ListingsProps = {
  listingsData: Listing[];
};

const Listings: React.FC<ListingsProps> = ({ listingsData }) => {
  const router = useRouter();
  const handleClick = (id: string) => {
    router.push(`/listing/${id}`);
  };

  return (
    <Box padding={{ base: "0px 24px", lg: "20px 80px" }}>
      <Flex justify="space-between" align="center" mb={4}>
        <Text my={2} color="blue.600">
          {listingsData.length} Properties
        </Text>
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            Sort by
          </MenuButton>
          <MenuList>
            <MenuItem>Price - Low to High</MenuItem>
            <MenuItem>Price - High to Low</MenuItem>
            <MenuItem>Date - Old to New</MenuItem>
            <MenuItem>Date - New to Old</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      {listingsData.map((listing) => {
        const {
          address,
          imageURLs,
          propertyStatus,
          propertyTitle,
          propertyLabel,
          bedrooms,
          bathrooms,
          garages,
          area,
          creatorDisplayName,
          createdAt,
          id,
        } = listing;
        return (
          <Link key={listing.id} href={`/listing/${id}`}>
            <Flex
              flexDirection={{ base: "column", lg: "row" }}
              bg="white"
              mb={6}
              width="100%"
            >
              <Flex mr={{ lg: 3 }}>
                <Image
                  objectFit="cover"
                  src={imageURLs[0]}
                  width={{ base: "100%", lg: "480px" }}
                  height="170px"
                  rounded="sm"
                />
              </Flex>

              <Flex
                width="100%"
                flexDir="column"
                p={2}
                my={2}
                justifyContent="space-between"
              >
                <Box>
                  <Flex fontSize={{ base: "8pt" }}>
                    <Text
                      bg="gray.600"
                      height="fit-content"
                      width="fit-content"
                      color="white"
                      p="2px"
                      rounded="sm"
                      mr={1}
                    >
                      {propertyStatus === "forRent" ? "FOR RENT" : "FOR SALE"}
                    </Text>
                    <Text
                      bg={propertyLabel === "hotOffer" ? "red.400" : "blue.400"}
                      height="fit-content"
                      width="fit-content"
                      color="white"
                      p="2px"
                      rounded="sm"
                    >
                      {propertyLabel && propertyLabel === "hotOffer"
                        ? "HOT OFFER"
                        : "OPEN HOUSE"}
                    </Text>
                  </Flex>
                </Box>
                <Text mt={1} fontSize="12pt">
                  {propertyTitle}
                </Text>
                <Text fontSize="9pt" color="gray.600">
                  {address}
                </Text>
                <Flex
                  flexWrap="wrap"
                  fontSize={{ base: "9pt", lg: "11pt" }}
                  align="center"
                  mt={2}
                  gap={2}
                >
                  <Flex align="center">
                    <Icon as={GiBed} mr={1} />
                    <Text>{bedrooms}</Text>
                  </Flex>
                  <Flex align="center">
                    <Icon as={GiBathtub} mr={1} />
                    <Text>{bathrooms}</Text>
                  </Flex>
                  <Flex align="center">
                    <Icon as={GiHomeGarage} mr={1} />
                    <Text>{garages}</Text>
                  </Flex>
                </Flex>
                <Divider p={2} display={{ lg: "none" }} />
                <Flex
                  fontSize={{ base: "9pt", lg: "10pt" }}
                  align="center"
                  justify="space-between"
                  gap={{ base: 2, lg: 6 }}
                  mt={2}
                  width="100%"
                >
                  <Flex align="center" gap={4} justify="space-between">
                    <Flex align="center">
                      <Icon as={HiOutlineUser} mr={1} />
                      <Text color="blue.600">{creatorDisplayName}</Text>
                    </Flex>
                    <Flex align="center">
                      <Icon as={AiOutlineFieldTime} mr={1} />
                      <Text>
                        {moment(new Date(createdAt?.seconds * 1000)).fromNow()}
                      </Text>
                    </Flex>
                  </Flex>
                  <Button
                    variant="solid"
                    height="30px"
                    display={{ base: "none", sm: "flex" }}
                    width={{ base: "70px", md: "110px" }}
                    mr={2}
                    padding="5px"
                    onClick={() => handleClick(id)}
                  >
                    Details
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Link>
        );
      })}
    </Box>
  );
};
export default Listings;

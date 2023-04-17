import React from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Icon,
  Input,
  Text,
} from "@chakra-ui/react";
import {
  AiOutlineArrowRight,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import { RiMapPin2Line } from "react-icons/ri";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  const locations = [
    { title: "New Haven" },
    { title: "Amsterdam" },
    { title: "Chicago" },
    { title: "Miami" },
  ];
  return (
    <footer>
      <Box
        height="fit-content"
        color="white"
        bgColor="#004274"
        padding={{ base: "40px 24px", lg: "100px 80px" }}
      >
        <Grid
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={{ base: 6, lg: 2 }}
        >
          <GridItem>
            <Flex flexDirection="column">
              <Text fontSize={{ base: "14pt", lg: "16pt" }}>Discover</Text>

              <Box mt={6}>
                {locations.map((location, i) => (
                  <Flex key={i} align="center" mb={2}>
                    <Icon as={AiOutlineArrowRight} mr={1} />
                    <Text>{location.title}</Text>
                  </Flex>
                ))}
              </Box>
            </Flex>
          </GridItem>

          <GridItem>
            <Text fontSize={{ base: "14pt", lg: "16pt" }}>Contact Us</Text>

            <Box mt={6}>
              <Flex align="center" mb={2}>
                <Icon as={RiMapPin2Line} mr={1} />
                <Text>774 NE 84th St Miami, FL 33879</Text>
              </Flex>
              <Flex align="center" mb={2}>
                <Icon as={AiOutlinePhone} mr={1} />
                <Text>879 456 1349</Text>
              </Flex>
              <Flex align="center" mb={2}>
                <Icon as={AiOutlineMail} mr={1} />
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href="mailto:ayomikolade2003@gmail.com"
                >
                  contact@mail.com
                </a>
              </Flex>
            </Box>
          </GridItem>

          <GridItem>
            <Text fontSize={{ base: "14pt", lg: "16pt" }}>Newsletter</Text>

            <Flex
              flexDirection={{ base: "column", lg: "row" }}
              mt={6}
              align="center"
            >
              <Input
                flex={{ lg: 2 }}
                placeholder="Your Email"
                type="text"
                mr={{ lg: 2 }}
                fontSize="10pt"
                _placeholder={{ color: "gray.500" }}
                _hover={{
                  bg: "white",
                  border: "1px solid",
                  borderColor: "blue.500",
                }}
                _focus={{
                  outline: "none",
                  bg: "white",
                  border: "1px solid",
                  borderColor: "blue.500",
                }}
                bg="gray.50"
              />
              <Button
                mt={{ base: 3, lg: 0 }}
                width="100%"
                flex={{ lg: 1 }}
                variant="solid"
                height="40px"
              >
                Submit
              </Button>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
      <Box
        bgColor="#00335A"
        color="white"
        padding={{ base: "40px 24px", lg: "40px 80px" }}
      >
        <Flex
          width="100%"
          flexWrap="wrap"
          align="center"
          justify={{ base: "center", md: "space-between" }}
          textAlign="center"
          textTransform="uppercase"
        >
          <Box>&copy; HomeHaven | {new Date().getFullYear()}</Box>
          <Box>
            <Box className="space-1">
              {" "}
              Design & Dev:{" "}
              <a
                className="link"
                target={"_blank"}
                href="https://twitter.com/swisssguard"
                rel="noreferrer"
              >
                Ayomide
              </a>
              .
            </Box>
            <Box>
              This project is open source, you can checkout the repo{" "}
              <a
                className="link"
                target={"_blank"}
                href="https://github.com/Swissguarde/homehaven"
                rel="noreferrer"
              >
                here.
              </a>
            </Box>
          </Box>
        </Flex>
      </Box>
    </footer>
  );
};
export default Footer;

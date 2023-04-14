import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import TabItem from "./TabItem";

type SearchBarProps = {};
export type MenuItemProp = {
  title: string;
};
const menuTab: Array<MenuItemProp> = [
  { title: "All Status" },
  { title: "Rent" },
  { title: "Sale" },
];

const SearchBar: React.FC<SearchBarProps> = () => {
  const [menuActive, setMenuActive] = useState(menuTab[0].title);

  return (
    <Box overflow="hidden">
      <Flex
        align="center"
        justify={{ base: "space-between", md: "center" }}
        paddingX="15px"
      >
        {menuTab.map((item, i) => (
          <TabItem
            key={i}
            item={item}
            selected={item.title === menuActive}
            setMenuActive={setMenuActive}
          />
        ))}
      </Flex>
      <Box
        position="relative"
        bgColor="white"
        color="black"
        height="fit-content"
        boxShadow="2xl"
        borderRadius="10px"
        padding={{ base: "20px", md: "40px" }}
      >
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          width="100%"
          align="center"
          justify="center"
        >
          <Box mr={{ md: 2 }} flex={1} width="100%">
            <Text fontSize="10pt">LOOKING FOR</Text>
            <Input
              type="text"
              outline="none"
              border="1px"
              bg="gray.50"
              borderColor="gray.200"
              height="36px"
              borderRadius={4}
              _hover={{
                bg: "white",
                border: "1px solid",
                borderColor: "blue.300",
              }}
              _focus={{
                outline: "none",
                bg: "white",
                border: "1px solid",
                borderColor: "blue.500",
              }}
            />
          </Box>
          <Box mr={{ md: 2 }} flex={1} width="100%">
            <Text fontSize="10pt">LOCATION</Text>
            <Input
              type="text"
              outline="none"
              border="1px"
              bg="gray.50"
              borderColor="gray.200"
              height="36px"
              borderRadius={4}
              _hover={{
                bg: "white",
                border: "1px solid",
                borderColor: "blue.300",
              }}
              _focus={{
                outline: "none",
                bg: "white",
                border: "1px solid",
                borderColor: "blue.500",
              }}
            />
          </Box>
          <Box mr={{ md: 2 }} flex={1} width="100%">
            <Text fontSize="10pt">PROPERTY SIZE</Text>
            <Input
              type="text"
              outline="none"
              border="1px"
              bg="gray.50"
              borderColor="gray.200"
              height="36px"
              borderRadius={4}
              _hover={{
                bg: "white",
                border: "1px solid",
                borderColor: "blue.300",
              }}
              _focus={{
                outline: "none",
                bg: "white",
                border: "1px solid",
                borderColor: "blue.500",
              }}
              mr={10}
            />
          </Box>
          <Box mr={{ md: 2 }} flex={1} width="100%">
            <Text fontSize="10pt">YOUR BUDGET</Text>
            <Input
              type="text"
              outline="none"
              border="1px"
              bg="gray.50"
              borderColor="gray.200"
              height="36px"
              borderRadius={4}
              _hover={{
                bg: "white",
                border: "1px solid",
                borderColor: "blue.300",
              }}
              _focus={{
                outline: "none",
                bg: "white",
                border: "1px solid",
                borderColor: "blue.500",
              }}
            />
          </Box>
          <Box width="100%" flex={1} mt={4}>
            <Button width="100%" variant="solid" height="36px">
              Search
            </Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
export default SearchBar;

import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { MenuItemProp } from "./SearchBar";

type TabItemProps = {
  item: MenuItemProp;
  selected: boolean;
  setMenuActive: (value: string) => void;
};

const TabItem: React.FC<TabItemProps> = ({ item, selected, setMenuActive }) => {
  return (
    <Flex
      flex={{ base: 1, md: "unset" }}
      height="48px"
      cursor="pointer"
      align="center"
      justify="center"
      borderTopRadius="5px"
      bgColor={`${selected ? "white" : "blue.400"}`}
      color={`${selected ? "black" : "white"}`}
      padding={{ base: "4px", md: "12px" }}
      textAlign="center"
      width={{ md: "7rem" }}
      marginRight="1px"
      onClick={() => setMenuActive(item.title)}
    >
      {item.title}
    </Flex>
  );
};
export default TabItem;

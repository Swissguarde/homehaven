import { Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";

type PropertyPageProps = {
  children: ReactNode;
};

const PropertyPage: React.FC<PropertyPageProps> = ({ children }) => {
  return (
    <Flex mt={{ base: 28, md: 32 }} justify="center">
      <Flex width="95%" justify="center" maxWidth="1200px">
        {/* LHS */}
        <Flex
          direction="column"
          width={{ base: "100%", md: "75%" }}
          mr={{ base: 0, md: 6 }}
        >
          {children && children[0 as keyof typeof children]}
        </Flex>

        {/* RHS */}
        <Flex
          direction="column"
          display={{ base: "none", md: "flex" }}
          flexGrow={1}
        >
          {children && children[1 as keyof typeof children]}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default PropertyPage;

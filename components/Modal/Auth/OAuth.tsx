import { Button, Flex, Image } from "@chakra-ui/react";
import React from "react";

type OAuthProps = {};

const OAuth: React.FC<OAuthProps> = () => {
  return (
    <Flex direction="column" width="100%" mb={4}>
      <Button variant="oauth" mb={2}>
        <Image src="/images/googlelogo.png" height="20px" mr={4} />
        Continue with Google
      </Button>
      {/* {error && <Text>{error.message}</Text>} */}
    </Flex>
  );
};
export default OAuth;

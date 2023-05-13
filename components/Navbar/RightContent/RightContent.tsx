import AuthModal from "@/components/Modal/Auth/AuthModal";
import { Button, Flex } from "@chakra-ui/react";
import { User } from "firebase/auth";
import Link from "next/link";
import React from "react";
import AuthButtons from "./AuthButtons";
import UserMenu from "./UserMenu";

type RightContentProps = {
  user?: User | null;
};

const RightContent: React.FC<RightContentProps> = ({ user }) => {
  return (
    <>
      <AuthModal />
      <Flex justify="center" align="center">
        {!user ? (
          <AuthButtons />
        ) : (
          <Link href="/create-listing">
            <Button
              variant="solid"
              height="40px"
              display={{ base: "none", md: "flex" }}
              width={{ base: "70px", md: "150px" }}
              mr={2}
              padding="10px"
            >
              CREATE A LISTING
            </Button>
          </Link>
        )}
        <UserMenu user={user} />
      </Flex>
    </>
  );
};
export default RightContent;

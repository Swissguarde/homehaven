import { authModalState } from "@/atoms/authModalAtom";
import { Button } from "@chakra-ui/react";
import React from "react";
import { useSetRecoilState } from "recoil";

const AuthButtons: React.FC = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  return (
    <>
      <Button
        variant="solid"
        height="34px"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "110px" }}
        mr={2}
        padding="5px"
        onClick={() => setAuthModalState({ open: true, view: "login" })}
      >
        LOG IN
      </Button>
      <Button
        variant="solid"
        height="34px"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "110px" }}
        mr={2}
        padding="5px"
        onClick={() => setAuthModalState({ open: true, view: "signup" })}
      >
        SIGN UP
      </Button>
    </>
  );
};
export default AuthButtons;

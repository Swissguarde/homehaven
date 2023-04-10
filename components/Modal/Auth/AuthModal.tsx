import { authModalState } from "@/atoms/authModalAtom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useRecoilState } from "recoil";
import AuthInputs from "./AuthInputs";
import OAuth from "./OAuth";
import ResetPassword from "./ResetPassword";

type AuthModalProps = {};

const AuthModal: React.FC<AuthModalProps> = () => {
  const [modalState, setModalState] = useRecoilState(authModalState);
  const { view, open } = modalState;
  const handleClose = () => {
    setModalState((prev) => ({
      ...prev,
      open: false,
    }));
  };

  return (
    <>
      <Modal
        size={{ base: "xs", sm: "md" }}
        isOpen={open}
        onClose={handleClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">
            {view === "login" && "Log In"}
            {view === "signup" && "Sign Up"}
            {view === "resetPassword" && "Reset Password"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            pb={6}
          >
            <Flex
              direction="column"
              align="center"
              justify="center"
              width={{ base: "100%", md: "70%" }}
            >
              {view === "login" || view === "signup" ? (
                <>
                  <OAuth />
                  <Text color="gray.500" fontWeight={700}>
                    OR
                  </Text>
                  <AuthInputs />
                </>
              ) : (
                <ResetPassword />
              )}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AuthModal;

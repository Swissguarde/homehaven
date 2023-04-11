import React, { useState } from "react";
import { Button, Flex, Icon, Input, Text } from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/clientApp";
import { BsDot } from "react-icons/bs";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/atoms/authModalAtom";

const ResetPassword: React.FC = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await sendPasswordResetEmail(email);
    setSuccess(true);
  };

  return (
    <Flex width="100%" align="center" flexDirection="column">
      <Icon as={AiOutlineHome} color="blue.400" fontSize={40} mb={2} />
      <Text fontWeight={700} mb={2} color="blue.400">
        Reset your password
      </Text>

      {success ? (
        <Text mb={4}>Check your email :)</Text>
      ) : (
        <>
          <Text textAlign="center" fontSize="sm" mb={2}>
            Enter the email associated with your account and we will send you a
            reset link
          </Text>
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <Input
              required
              name="email"
              placeholder="Email"
              type="email"
              mb={2}
              onChange={(e) => setEmail(e.target.value)}
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
            <Text textAlign="center" fontSize="10pt" color="red">
              {error?.message}
            </Text>
            <Button
              width="100%"
              height="36px"
              mb={2}
              mt={2}
              type="submit"
              isLoading={sending}
            >
              Reset Password
            </Button>
          </form>
        </>
      )}
      <Flex
        align="center"
        fontSize="9pt"
        fontWeight={700}
        color="blue.400"
        cursor="pointer"
      >
        <Text
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: "login",
            }))
          }
        >
          LOGIN
        </Text>
        <Icon as={BsDot} />
        <Text
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: "signup",
            }))
          }
        >
          SIGN UP
        </Text>
      </Flex>
    </Flex>
  );
};
export default ResetPassword;

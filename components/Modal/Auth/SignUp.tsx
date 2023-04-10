import { authModalState } from "@/atoms/authModalAtom";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";

type SignUpProps = {};

const SignUp: React.FC<SignUpProps> = () => {
  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = signupForm;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const setAuthModalState = useSetRecoilState(authModalState);
  return (
    <form>
      <Input
        required
        name="name"
        type="text"
        placeholder="Full Name"
        onChange={handleChange}
        mb={2}
        fontSize="10pt"
        _placeholder={{ color: "gray.500" }}
        _hover={{ bg: "white", border: "1px solid", borderColor: "blue.500" }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        bg="gray.50"
      />
      <Input
        onChange={handleChange}
        required
        name="email"
        placeholder="Email"
        type="email"
        mb={2}
        fontSize="10pt"
        _placeholder={{ color: "gray.500" }}
        _hover={{ bg: "white", border: "1px solid", borderColor: "blue.500" }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        bg="gray.50"
      />

      <Input
        required
        name="password"
        placeholder="Password"
        type="password"
        onChange={handleChange}
        mb={2}
        fontSize="10pt"
        _placeholder={{ color: "gray.500" }}
        _hover={{ bg: "white", border: "1px solid", borderColor: "blue.500" }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        bg="gray.50"
      />
      {/* <Text textAlign="center" color="red" fontSize="10pt">
        {FIREBASE_ERRORS[error?.message as keyof typeof FIREBASE_ERRORS]}
        
      </Text> */}

      <Button
        width="100%"
        height="36px"
        mt={2}
        mb={2}
        type="submit"
        // isLoading={loading}
      >
        Sign Up
      </Button>
      <Flex justifyContent="center" mb={2}>
        <Text fontSize="9pt" mr={1}>
          Forgot your password?
        </Text>
        <Text
          onClick={() =>
            setAuthModalState((prev) => ({ ...prev, view: "resetPassword" }))
          }
          fontSize="9pt"
          color="blue.500"
          cursor="pointer"
        >
          Reset
        </Text>
      </Flex>
      <Flex fontSize="9pt" justifyContent="center">
        <Text mr={1}>Already have an account?</Text>
        <Text
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: "login",
            }))
          }
          color="blue.500"
          fontWeight={700}
          cursor="pointer"
        >
          LOG IN
        </Text>
      </Flex>
    </form>
  );
};
export default SignUp;

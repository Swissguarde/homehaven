import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import RightContent from "./RightContent/RightContent";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const user = false;
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { title: "Property", link: "/" },
    { title: "Listing", link: "/" },
    { title: "About", link: "/" },
    { title: "Contact", link: "/" },
  ];
  const toggleNav = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <Flex
      position="fixed"
      top="0"
      left="0"
      zIndex="10"
      width="100%"
      padding={{ base: "16px 24px", lg: "20px 80px" }}
      justify="space-between"
      align="center"
      bgColor={`${scroll && "#004274"}`}
    >
      <Box
        onClick={toggleNav}
        zIndex={10}
        cursor="pointer"
        fontSize={{ base: "1.875rem", md: "2.25rem" }}
        display={{ lg: "none" }}
        color="white"
      >
        {isOpen ? <RxCross1 /> : <AiOutlineBars />}
      </Box>
      <Flex
        align="center"
        fontSize={{ base: "19pt", md: "22pt" }}
        fontWeight={700}
      >
        <Text color="white">home</Text>
        <Text color="blue.400">Haven</Text>
      </Flex>

      <Flex
        fontSize="14pt"
        display={{ base: "none", lg: "flex" }}
        color="white"
        textTransform="uppercase"
      >
        {navLinks.map((link, i) => (
          <Link key={i} href={link.link} className="link">
            <Text mr={5}>{link.title}</Text>
          </Link>
        ))}
      </Flex>

      <Flex
        position="fixed"
        left={`${isOpen ? "0" : "-100vw"}`}
        right={0}
        width="80%"
        top={0}
        height="100vh"
        flexDirection="column"
        align="center"
        justify="center"
        color="white"
        textTransform="uppercase"
        backgroundColor="#004274"
        transition="ease-in-out"
        transitionDuration=".7s"
      >
        {navLinks.map((link, i) => (
          <Link key={i} href={link.link} className="link">
            <Text my={5}>{link.title}</Text>
          </Link>
        ))}
      </Flex>

      <RightContent user={user} />
    </Flex>
  );
};
export default Navbar;

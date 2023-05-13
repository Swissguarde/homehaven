import { auth } from "@/firebase/clientApp";
import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiOutlineBars } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import RightContent from "./RightContent/RightContent";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const [user] = useAuthState(auth);
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState<boolean>(false);
  const router = useRouter();
  const isNotHome = router.pathname !== "/";

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
    { title: "Listings", link: "/listings" },
    { title: "Featured", link: "/" },
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
      zIndex="50"
      width="100%"
      padding={{ base: "16px 24px", lg: "20px 80px" }}
      justify="space-between"
      align="center"
      bgColor={`${(scroll || isNotHome) && "#004274"}`}
      boxShadow={`${scroll && "2xl"}`}
    >
      <Box
        onClick={toggleNav}
        zIndex={10}
        cursor="pointer"
        fontSize={{ base: "1.875rem", md: "2.25rem" }}
        display={{ lg: "none" }}
        color="white"
      >
        <AnimatePresence>
          {isOpen ? (
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 180 }}
              exit={{ rotate: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <RxCross1 />
            </motion.div>
          ) : (
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 0 }}
              exit={{ rotate: 45 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <AiOutlineBars />
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
      <Link href="/">
        <Flex
          align="center"
          fontSize={{ base: "19pt", md: "22pt" }}
          fontWeight={700}
        >
          <Image src="/images/logo.png" objectFit="cover" />
        </Flex>
      </Link>

      <Flex
        fontSize="13pt"
        display={{ base: "none", lg: "flex" }}
        color="white"
        textTransform="uppercase"
      >
        {navLinks.map((link, i) => (
          <Link key={i} href={link.link}>
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
          <Link key={i} href={link.link}>
            <Text my={5}>{link.title}</Text>
          </Link>
        ))}
      </Flex>

      <RightContent user={user} />
    </Flex>
  );
};
export default Navbar;

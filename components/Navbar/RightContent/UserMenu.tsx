import { authModalState } from "@/atoms/authModalAtom";
import { auth } from "@/firebase/clientApp";
import {
  Box,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { signOut, User } from "firebase/auth";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLogin } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { useSetRecoilState } from "recoil";

type UserMenuProps = {
  user?: User | null;
};

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const logOut = async () => {
    signOut(auth);
  };
  const router = useRouter();

  const handleClick = () => {
    router.push("/create-listing");
  };
  return (
    <Menu>
      <MenuButton
        cursor="pointer"
        padding="4px 10px"
        borderRadius={4}
        _hover={{ outline: "1px solid", outlineColor: "gray.200" }}
      >
        <Flex align="center">
          <Icon as={VscAccount} fontSize={24} color="white" />
        </Flex>
      </MenuButton>
      <MenuList>
        {user ? (
          <Box>
            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: "#004274", color: "white" }}
              onClick={handleClick}
            >
              <Flex align="center">
                <Icon fontSize={20} mr={2} as={AiOutlinePlus} />
                Create Listing
              </Flex>
            </MenuItem>
            <MenuDivider />

            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: "#004274", color: "white" }}
            >
              <Flex align="center">
                <Icon fontSize={20} mr={2} as={CgProfile} />
                Profile
              </Flex>
            </MenuItem>
            <MenuDivider />
            <MenuItem
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: "#004274", color: "white" }}
              onClick={logOut}
            >
              <Flex align="center">
                <Icon fontSize={20} mr={2} as={MdOutlineLogin} />
                Log Out
              </Flex>
            </MenuItem>
          </Box>
        ) : (
          <MenuItem
            onClick={() => setAuthModalState({ open: true, view: "login" })}
          >
            <Flex align="center">
              <Icon fontSize="8pt" mr={2} as={MdOutlineLogin} />
              Log In / Sign Up
            </Flex>
          </MenuItem>
        )}
      </MenuList>
    </Menu>
  );
};
export default UserMenu;

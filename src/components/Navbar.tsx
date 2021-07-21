import React ,{ useState } from "react";
import {
  Flex,
  Spacer,
  Stack,
  Box,
  Text,
  Center,
  IconButton,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "gatsby"
const Navbar = () => {
  const bgcolor = useColorModeValue("gray.200", "gray.700");
  const [display, changeDisplay] = useState("none");

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Flex>
      <Flex align="center" pos="fixed" top="1rem" right=".5rem" zIndex="toast">
        {/* Desktop */}
        <Flex>
          <Flex display={["none", "none", "flex", "flex"]}>
            <Link to="/">
              <Button variant="ghost" mr={2}>
                Home
              </Button>
            </Link>
            <Link to="/Projects">
              <Button variant="ghost" mr={2}>
                Projects
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="ghost" mr={2}>
                Contact
              </Button>
            </Link>
          </Flex>
        </Flex>
        {/* mobile */}
        <IconButton
          aria-label="Open Menu"
          size="md"
          mr={2}
          icon={<HamburgerIcon />}
          onClick={() => changeDisplay("flex")}
          display={["flex", "flex", "none", "none"]}
        />
        <Flex
          w="100%"
          bgColor={bgcolor}
          display={display}
          zIndex="tooltip"
          minH="100vh"
          pos="fixed"
          top="0"
          left="0"
          overflowY="auto"
          flexDir="column"
        >
          <Flex justify="flex-end" p={2}>
            <IconButton
              mt={2}
              mr={2}
              aria-label="Open menu"
              size="md"
              icon={<CloseIcon />}
              onClick={() => changeDisplay("none")}
            />
          </Flex>
          <Flex flexDir="column" align="center">
            <Link to="/">
              <Button variant="ghost" m={4}>
                Home
              </Button>
            </Link>
            <Link to="/Projects">
              <Button variant="ghost" m={4}>
                Projects
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="ghost" m={4}>
                Contact
              </Button>
            </Link>
          </Flex>
          <Spacer />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
  Container,
  Icon,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  MoonIcon,
  SunIcon,
  AtSignIcon,
} from "@chakra-ui/icons";
import { useState } from "react";
import { useRouter } from "next/router";
import NavLink from "../library/NavLink";

const Links = [
  { label: "home", id: "home" },
  { label: "projects", id: "projects" },
  { label: "contacts", id: "contacts" },
];

export default function WithAction() {
  const [activePage, setActivePage] = useState("home");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();

  const handleNavLinkClick = (id: string) => {
    setActivePage(id);
    router.push({
      pathname: "/",
      query: { activePage: id },
    });
  };

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Container>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={"center"}>
              <Box
                className="logo"
                id="home"
                onClick={() => setActivePage("home")}
              >
                <Icon as={AtSignIcon} mr={1} color="pink.400" />
                Your name
              </Box>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                {Links.map((link) => (
                  <NavLink
                    key={link.id}
                    label={link.label}
                    id={link.id}
                    setActivePage={handleNavLinkClick}
                  />
                ))}
              </HStack>
            </HStack>
            <Flex alignItems={"center"}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Flex>
          </Flex>

          {isOpen ? (
            <Box pb={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4}>
                {Links.map((link) => (
                  <NavLink
                    key={link.id}
                    label={link.label}
                    id={link.id}
                    setActivePage={handleNavLinkClick}
                  />
                ))}
              </Stack>
            </Box>
          ) : null}
        </Container>
      </Box>
    </>
  );
}

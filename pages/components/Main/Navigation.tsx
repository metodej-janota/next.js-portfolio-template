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
import { motion } from "framer-motion";
/* SEKCE */
import Intro from "./Intro";
import About from "../Sections/About";
import Contacts from "../Sections/Contacts";
import Projects from "../Sections/Projects";

const Links = [
  { label: "Projekty", id: "projects" },
  { label: "Kontakty", id: "contacts" },
];

const NavLink = (props: { label: string; id: string; onClick: () => void }) => {
  const { label, onClick } = props;
  return (
    <Box
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      onClick={onClick}
    >
      {label}
    </Box>
  );
};

const HomePage = () => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0, scale: 1 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <About />
    </motion.div>
  );
};

const ProjectsPage = () => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0, scale: 1 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <Projects/>
    </motion.div>
  );
};

const ContactsPage = () => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0, scale: 1 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <Contacts />
    </motion.div>
  );
};

export default function WithAction() {
  const [activePage, setActivePage] = useState("home");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const handleLinkClick = (id: string) => {
    setActivePage(id);
    onClose();
  };

  const getPageContent = () => {
    switch (activePage) {
      case "home":
        return <HomePage />;
      case "projects":
        return <ProjectsPage />;
      case "contacts":
        return <ContactsPage />;
      default:
        return <HomePage />;
    }
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
                onClick={() => handleLinkClick("home")}
              >
                <Icon as={AtSignIcon} mr={1} color="pink.400" />
                Metoděj Janota
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
                    onClick={() => handleLinkClick(link.id)}
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
                    onClick={() => handleLinkClick(link.id)}
                  />
                ))}
              </Stack>
            </Box>
          ) : null}
        </Container>
      </Box>
      <Container mt={2}>
        <Intro />
        {getPageContent()}
      </Container>
    </>
  );
}

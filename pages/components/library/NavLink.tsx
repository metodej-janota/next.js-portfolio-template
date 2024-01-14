import React from "react";
import { useColorModeValue, Box } from "@chakra-ui/react";

interface NavLinkProps {
  label: string;
  id: string;
  setActivePage: (id: string) => void;
}

const NavLink: React.FC<NavLinkProps> = (props) => {
  const { label, id, setActivePage } = props;

  const handleClick = () => {
    setActivePage(id);
  };

  return (
    <Box
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      onClick={handleClick}
    >
      {label}
    </Box>
  );
};

export default NavLink;

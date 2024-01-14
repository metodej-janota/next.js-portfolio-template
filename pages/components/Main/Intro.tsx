import { Box, useColorModeValue, Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Site from "./Site";

export default function Page() {
  const router = useRouter();
  const { activePage } = router.query;
  const [activePageState, setActivePageState] = useState<string>("home");

  useEffect(() => {
    if (activePage) {
      if (Array.isArray(activePage)) {
        setActivePageState(activePage[0]);
      } else {
        setActivePageState(activePage);
      }
    }
  }, [activePage]);

  return (
    <Container width={"100%"}>
      <Box
        borderRadius="lg"
        bg={useColorModeValue("blackAlpha.200", "whiteAlpha.200")}
        p={3}
        mb={6}
        textAlign={"center"}
      >
        Welcome to my website!
      </Box>
      <h1>Your name</h1>
      <p>Your profession</p>
      <Site activePage={activePageState} />
    </Container>
  );
}

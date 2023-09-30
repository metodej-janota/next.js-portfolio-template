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
        Vítejte na mém webu, jsem full-stack vývojář sídlící ve Zlíně!
      </Box>
      <h1>Metoděj Janota</h1>
      <p>Multimediální obor ( Vývojář / Umělec / Designer )</p>
      <Site activePage={activePageState} />
    </Container>
  );
}

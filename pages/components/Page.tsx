import {
  Container,
  Box,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

export default function Page() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          p={3}
          mb={6}
        >
          Jsem totální swager
        </Box>
        <h1>Metoděj Janota</h1>
        <h3>Multimediální obor ( Vývojář / Umělec / Designer )</h3>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </Container>
    </>
  );
}

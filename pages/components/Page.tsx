import { Container, Box, useColorModeValue } from "@chakra-ui/react";

export default function Page() {
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
        <p>Multimediální obor ( Vývojář / Umělec / Designer )</p>
      </Container>
    </>
  );
}

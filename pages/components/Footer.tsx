import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function SmallWithLogoLeft() {
  return (
    <Box
    bg={useColorModeValue("gray.100", "gray.900")}
      mt={10}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <div className="logo">
          Metoděj Janota
        </div>

        <Text>© 2023 Metoděj Janota. Všechna práva vyhrazena.</Text>
        <Stack direction={"row"} spacing={6}>
            {/* Jsem přidám socky */}
        </Stack>
      </Container>
    </Box>
  );
}

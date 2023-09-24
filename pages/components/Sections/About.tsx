import { Link, Box, Button, AbsoluteCenter, HStack } from "@chakra-ui/react";
import { ExternalLinkIcon, ChevronRightIcon } from "@chakra-ui/icons";

export default function About() {
  return (
    <>
      <Box>
        <h3>Práce</h3>
        <p>
          Jsem full-stack vývojář s vášní pro vytváření digitálních služeb. Mým
          zaměřením je kombinace kódu, designu a plánování produktů. Věnuji se
          řešení konkrétních problémů pomocí technologie a mám zkušenosti z
          různých projektů. Mým cílem je vytvářet uživatelsky přívětivé a
          konkurenceschopné produkty, které usnadňují život lidem. Více můžete
          zjistit v sekci{" "}
          <Link color="pink.400" href="https://chakra-ui.com">
            Bio
          </Link>
          .
        </p>

        <Box position="relative" h="50px" mt={3}>
          <AbsoluteCenter axis="both">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Mé portfolio
            </Button>
          </AbsoluteCenter>
        </Box>
      </Box>

      <Box mt={6}>
        <h3>Bio</h3>
        <HStack spacing="24px">
          <Box w="40px" h="40px" bg="yellow.200">
            1
          </Box>
          <Box w="40px" h="40px" bg="tomato">
            2
          </Box>
          <Box w="40px" h="40px" bg="pink.100">
            3
          </Box>
        </HStack>
      </Box>
    </>
  );
}

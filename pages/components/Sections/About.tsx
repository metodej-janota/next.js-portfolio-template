import { Link, Box, Button, AbsoluteCenter, Flex } from "@chakra-ui/react";
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
        <Flex>
          <Box as={"b"}>2005</Box>
          <Box ml={4}>Narození ve Zlíně.</Box>
        </Flex>

        <Flex>
          <Box as={"b"}>2021</Box>
          <Box ml={4}>
            Nastoupení na{" "}
            <Link href="https://creativehill.cz/" color="pink.400" isExternal>
              Creative hill college <ExternalLinkIcon mx="2px" />
            </Link>{" "}
            na obor vývoj počítačových her a multumediálních aplikací.
          </Box>
        </Flex>

        <Flex>
          <Box as={"b"}>2022</Box>
          <Box ml={4}>
            Výhra ve školní soutěži Hackathon, kde jsem já a můj team vytvořili
            aplikaci na téma „co by usnadnilo podnikání nebo život Tomášovi
            Baťovi“. Více ve školním{" "}
            <Link
              href="https://creativniprojekty.cz/2022/11/21/hackathon/"
              color="pink.400"
              isExternal
            >
              příspěvku <ExternalLinkIcon mx="2px" />.
            </Link>
          </Box>
        </Flex>

        <Flex>
          <Box as={"b"}>2023</Box>
          <Box ml={4}>
            Praxe u firmu{" "}
            <Link
              href="https://wordpress.crmmini.cz/"
              color="pink.400"
              isExternal
            >
              Technodat <ExternalLinkIcon mx="2px" />
            </Link>{" "}
            kde jsem následně dostal hodnocení {"výborné"} a nabídku práce.
          </Box>
        </Flex>

        <Flex>
          <Box as={"b"}>2023</Box>
          <Box ml={4}>
            Práce u firmy{" "}
            <Link
              href="https://wordpress.crmmini.cz/"
              color="pink.400"
              isExternal
            >
              Technodat <ExternalLinkIcon mx="2px" />
            </Link>{" "}
            a u firmy{" "}
            <Link href="http://carat.crmmini.cz/" color="pink.400" isExternal>
              Carat <ExternalLinkIcon mx="2px" />
            </Link>
            .
          </Box>
        </Flex>
      </Box>
    </>
  );
}

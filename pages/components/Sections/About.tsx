import {
  Link,
  Box,
  Button,
  AbsoluteCenter,
  Flex,
  Progress,
  Card,
  CardBody,
  Text,
  Heading,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import { ExternalLinkIcon, ChevronRightIcon } from "@chakra-ui/icons";

export default function About() {
  return (
    <>
      <Box>
        <h3>Práce</h3>
        <Box>
          <Text>
            ㅤJsem full-stack vývojář s vášní pro vytváření digitálních služeb.
            Mým zaměřením je kombinace kódu, designu a plánování produktů.
            Věnuji se řešení konkrétních problémů pomocí technologie a mám
            zkušenosti z různých projektů. Mým cílem je vytvářet uživatelsky
            přívětivé a konkurenceschopné produkty, které usnadňují život lidem.
            Více v sekci{" "}
            <Link color="pink.400" href="">
              Bio
            </Link>{" "}
            nebo{" "}
            <Link color="pink.400" href="">
              Zkušenosti
            </Link>
            .
          </Text>
        </Box>

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

        <Box mt={10}>
          <h3>Zkušenosti</h3>
          <Box>
            <Box>
              JavaScript & TypeScript
              <Progress value={80} colorScheme="teal" />
            </Box>
            <Box mt={2}>
              HTML5 & CSS
              <Progress value={90} colorScheme="teal" />
            </Box>
            <Box mt={2}>
              Java & C++
              <Progress value={50} colorScheme="teal" />
            </Box>
            <Box mt={2}>
              MySQL & NoSQL
              <Progress value={40} colorScheme="teal" />
            </Box>
          </Box>
        </Box>

        <Box mt={10}>
          <h3>Oblíbené technologie</h3>
          <Card mt={2}>
            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    NodeJS
                  </Heading>
                  <Link
                    href="https://nodejs.org/en"
                    color="pink.400"
                    isExternal
                  >
                    https://nodejs.org/en <ExternalLinkIcon mx="2px" />
                  </Link>
                </Box>

                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    React
                  </Heading>
                  <Link href="https://react.dev/" color="pink.400" isExternal>
                    https://react.dev/ <ExternalLinkIcon mx="2px" />
                  </Link>
                </Box>

                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Next.js
                  </Heading>
                  <Link href="https://nextjs.org/" color="pink.400" isExternal>
                    https://nextjs.org/ <ExternalLinkIcon mx="2px" />
                  </Link>
                </Box>

                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Feather icons
                  </Heading>
                  <Link
                    href="https://feathericons.com/"
                    color="pink.400"
                    isExternal
                  >
                    https://feathericons.com/ <ExternalLinkIcon mx="2px" />
                  </Link>
                </Box>

                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Chakra UI
                  </Heading>
                  <Link
                    href="https://chakra-ui.com/"
                    color="pink.400"
                    isExternal
                  >
                    https://chakra-ui.com/ <ExternalLinkIcon mx="2px" />
                  </Link>
                </Box>

                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Framer Motion
                  </Heading>
                  <Link
                    href="https://chakra-ui.com/"
                    color="pink.400"
                    isExternal
                  >
                    https://chakra-ui.com/ <ExternalLinkIcon mx="2px" />
                  </Link>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </Box>
      </Box>
    </>
  );
}

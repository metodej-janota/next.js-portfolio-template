import {
  Link,
  Box,
  Button,
  AbsoluteCenter,
  Flex,
  Progress,
  Text,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import {
  ExternalLinkIcon,
  ChevronRightIcon,
  AtSignIcon,
} from "@chakra-ui/icons";

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

        <Button
          rightIcon={<ChevronRightIcon />}
          colorScheme="teal"
          mt={3}
        >
          Mé portfolio
        </Button>
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
            <Text>
              Výhra ve školní soutěži Hackathon, kde jsem já a můj team
              vytvořili aplikaci na téma „co by usnadnilo podnikání nebo život
              Tomášovi Baťovi“. Více ve školním{" "}
              <Link
                href="https://creativniprojekty.cz/2022/11/21/hackathon/"
                color="pink.400"
                isExternal
              >
                příspěvku <ExternalLinkIcon mx="2px" />.
              </Link>
            </Text>
          </Box>
        </Flex>

        <Flex>
          <Box as={"b"}>2023</Box>
          <Box ml={4}>
            <Text>
              Praxe u firmu{" "}
              <Link
                href="https://wordpress.crmmini.cz/"
                color="pink.400"
                isExternal
              >
                Technodat <ExternalLinkIcon mx="2px" />
              </Link>{" "}
              kde jsem následně dostal hodnocení {"výborné"} a nabídku práce.
            </Text>
          </Box>
        </Flex>

        <Flex>
          <Box as={"b"}>2023</Box>
          <Box ml={4}>
            <Text>
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
            </Text>
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
          <h3>Web</h3>
          <Text>
            ㅤVítejte na mé webové stránce, kde prezentuji své nejnovější a
            nejlepší práce v oblasti webového designu a vývoje. Toto portfolio
            je výsledkem mého úsilí a vášně pro tvorbu moderních a
            interaktivních webových stránek. Na této stránce využívám několik
            klíčových technologií a nástrojů, které zahrnují:
          </Text>
          <br />

          <List spacing={3}>
            <ListItem>
              <ListIcon as={AtSignIcon} />
              <Link href="" color="pink.400" isExternal>
                Node.js <ExternalLinkIcon mx="2px" />
              </Link>{" "}
              Zajišťuje rychlý a spolehlivý provoz serverové části mého webu.
            </ListItem>

            <ListItem>
              <ListIcon as={AtSignIcon} />
              <Link href="" color="pink.400" isExternal>
                React <ExternalLinkIcon mx="2px" />
              </Link>{" "}
              Vytvářím responzivní a interaktivní uživatelské rozhraní.
            </ListItem>

            <ListItem>
              <ListIcon as={AtSignIcon} />
              <Link href="" color="pink.400" isExternal>
                Next.js
                <ExternalLinkIcon mx="2px" />
              </Link>{" "}
              Optimalizace výkonu webu s načítáním a server-side renderem.
            </ListItem>

            <ListItem>
              <ListIcon as={AtSignIcon} />
              <Link href="" color="pink.400" isExternal>
                Three.js
                <ExternalLinkIcon mx="2px" />
              </Link>{" "}
              Vytvářím 3D interakce, které zaujmou.
            </ListItem>

            <ListItem>
              <ListIcon as={AtSignIcon} />
              <Link href="" color="pink.400" isExternal>
                Chakra UI
                <ExternalLinkIcon mx="2px" />
              </Link>{" "}
              Používám Chakra UI pro elegantní rozhraní.
            </ListItem>

            <ListItem>
              <ListIcon as={AtSignIcon} />
              <Link href="" color="pink.400" isExternal>
                Framer Motion
                <ExternalLinkIcon mx="2px" />
              </Link>{" "}
              Zajišťuje plynulé a atraktivní animace.
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
}

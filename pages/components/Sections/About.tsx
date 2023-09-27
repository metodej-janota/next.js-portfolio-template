import {
  Box,
  Flex,
  Progress,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { LinkIcon } from "@chakra-ui/icons";
import MotionExternalLink from "../Animations/MotionExternalLink";
import MotionLink from "../Animations/MotionLink";
import MotionButton from "../Animations/MotionButton";
import MotionProgress from "../Animations/MotionProgress"

export default function About() {
  return (
    <>
      <Box>
        <h3>Práce</h3>
        ㅤJsem full-stack vývojář s vášní pro vytváření digitálních služeb. Mým
        zaměřením je kombinace kódu, designu a plánování produktů. Věnuji se
        řešení konkrétních problémů pomocí technologie a mám zkušenosti z
        různých projektů. Mým cílem je vytvářet uživatelsky přívětivé a
        konkurenceschopné produkty, které usnadňují život lidem. Více v sekci{" "}
        <MotionLink href="#bio">Bio</MotionLink> nebo{" "}
        <MotionLink href="#zkusenosti">Zkušenosti</MotionLink>.
        <MotionButton width="100">Portfolio</MotionButton>
      </Box>

      <Box mt={6}>
        <h3 id="bio">Biografie</h3>
        <Flex>
          <Box as={"b"}>2005</Box>
          <Box ml={4}>Narození ve Zlíně.</Box>
        </Flex>

        <Flex>
          <Box as={"b"}>2021</Box>
          <Box ml={4}>
            Nastoupení na talentovou školu{" "}
            <MotionExternalLink href="https://creativehill.cz/">
              Creative hill college
            </MotionExternalLink>{" "}
            na obor vývoj počítačových her a multumediálních aplikací.
          </Box>
        </Flex>

        <Flex>
          <Box as={"b"}>2022</Box>
          <Box ml={4}>
            Výhra ve školní soutěži Hackathon, kde jsem já a můj team vytvořili
            aplikaci na téma „co by usnadnilo podnikání nebo život Tomášovi
            Baťovi“. Více ve školním{" "}
            <MotionExternalLink href="https://creativniprojekty.cz/2022/11/21/hackathon/">
              příspěvku
            </MotionExternalLink>
          </Box>
        </Flex>

        <Flex>
          <Box as={"b"}>2023</Box>
          <Box ml={4}>
            Praxe u firmu{" "}
            <MotionExternalLink href="https://wordpress.crmmini.cz/">
              Technodat
            </MotionExternalLink>{" "}
            kde jsem následně dostal hodnocení {"výborné"} a nabídku práce.
          </Box>
        </Flex>

        <Flex>
          <Box as={"b"}>2023</Box>
          <Box ml={4}>
            Práce u firmy{" "}
            <MotionExternalLink href="https://wordpress.crmmini.cz/">
              Technodat
            </MotionExternalLink>{" "}
            a u firmy{" "}
            <MotionExternalLink href="http://carat.crmmini.cz/">
              Carat
            </MotionExternalLink>
            .
          </Box>
        </Flex>

        <Box mt={10}>
          <h3 id="zkusenosti">Zkušenosti</h3>
          <Box>
            <MotionProgress value={60}>TEST TEST TEST TEST TEST</MotionProgress>
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
          <h3>Specifikace webu</h3>
          ㅤVítejte na mé webové stránce, kde prezentuji své nejnovější a
          nejlepší práce v oblasti webového designu a vývoje. Toto portfolio je
          výsledkem mého úsilí a vášně pro tvorbu moderních a interaktivních
          webových stránek. Na této stránce využívám několik klíčových
          technologií a nástrojů, které zahrnují:
          <br /><br/>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={LinkIcon} />
              <MotionExternalLink href="https://nodejs.org/en">Node.js</MotionExternalLink> Zajišťuje
              rychlý a spolehlivý provoz serverové části mého webu.
            </ListItem>

            <ListItem>
              <ListIcon as={LinkIcon} />
              <MotionExternalLink href="https://react.dev/">React</MotionExternalLink> Vytvářím
              responzivní a interaktivní uživatelské rozhraní.
            </ListItem>

            <ListItem>
              <ListIcon as={LinkIcon} />
              <MotionExternalLink href="https://nextjs.org/">Next.js</MotionExternalLink>{" "}
              Optimalizace výkonu webu s načítáním a server-side renderem.
            </ListItem>

            <ListItem>
              <ListIcon as={LinkIcon} />
              <MotionExternalLink href="https://threejs.org/">Three.js</MotionExternalLink> Vytvářím
              3D interakce, které zaujmou.
            </ListItem>

            <ListItem>
              <ListIcon as={LinkIcon} />
              <MotionExternalLink href="https://chakra-ui.com/">Chakra UI</MotionExternalLink>{" "}
              Používám Chakra UI pro elegantní rozhraní.
            </ListItem>

            <ListItem>
              <ListIcon as={LinkIcon} />
              <MotionExternalLink href="https://www.framer.com/motion/">
                Framer Motion
              </MotionExternalLink>{" "}
              Zajišťuje plynulé a atraktivní animace.
            </ListItem>

            <ListItem>
              <ListIcon as={LinkIcon} />
              <MotionExternalLink href="https://sketchfab.com/3d-models/k-vrc-love-death-robots-1a89dbad3a894642958405728ba66d9d">
                3D Objekt
              </MotionExternalLink>{" "}
              {"K-VRC | Love, Death + Robots "} od ArbitraryCanary
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
}

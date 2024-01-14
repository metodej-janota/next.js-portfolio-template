import { Box, Flex, List, ListItem, ListIcon, Link } from "@chakra-ui/react";
import { LinkIcon } from "@chakra-ui/icons";
import MotionExternalLink from "../library/MotionExternalLink";
import MotionLink from "../library/MotionLink";
import MotionButton from "../library/MotionButton";
import MotionProgress from "../library/MotionProgress";

export default function About() {
  return (
    <>
      <Box mt={6}>
        <h3>Section</h3>
        text
        <MotionButton width="100" href="">
          Text
        </MotionButton>
      </Box>

      <Box mt={6}>
        <h3 id="bio">Biographies</h3>
        <Flex>
          <Box as={"b"}>2001</Box>
          <Box ml={4}>Text</Box>
        </Flex>

        <Flex>
          <Box as={"b"}>2002</Box>
          <Box ml={4}>Text</Box>
        </Flex>

        <Flex>
          <Box as={"b"}>2003</Box>
          <Box ml={4}>Text</Box>
        </Flex>

        <Flex>
          <Box as={"b"}>2004</Box>
          <Box ml={4}>Text</Box>
        </Flex>

        <Flex>
          <Box as={"b"}>2005</Box>
          <Box ml={4}>Text</Box>
        </Flex>

        <Box mt={10}>
          <h3 id="zkusenosti">Skills</h3>
          <Box>
            <MotionProgress value={80}>JavaScript & TypeScript</MotionProgress>
            <MotionProgress value={70}>React, Vue</MotionProgress>
            <MotionProgress value={95}>HTML5 & CSS</MotionProgress>
            <MotionProgress value={60}>Java & C++</MotionProgress>
            <MotionProgress value={50}>MySQL & NoSQL</MotionProgress>
          </Box>
        </Box>

        <Box mt={6}>
          <h3>Another Section</h3>
          text
          <MotionButton width="100" href="">
            Text
          </MotionButton>
        </Box>
      </Box>
    </>
  );
}

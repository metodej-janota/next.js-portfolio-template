import { Container, Box, useColorModeValue, Tooltip } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Object3D from "./Sections/Objekt3D";
import About from "./Sections/About";

export default function Page() {
  return (
    <>
      <Container mt={2}>
        <Tooltip
          label="Držením můžeš otáčet!"
          aria-label="A tooltip"
          placement="right"
          hasArrow
          arrowSize={15}
        >
          <Box>
            <Object3D />
          </Box>
        </Tooltip>

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

        <Box mt={6}>
          <motion.div
            initial={{ y: 10, opacity: 0, scale: 1 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <About />
          </motion.div>
        </Box>
      </Container>
    </>
  );
}

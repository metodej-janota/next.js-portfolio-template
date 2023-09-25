import { Container, Box, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Object3D from "./Sections/Objekt3D";
import About from "./Sections/About";

export default function Page() {
  return (
    <>
      <Container mt={6}>
        <Object3D />

        <Box
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
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
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <About />
          </motion.div>
        </Box>
      </Container>
    </>
  );
}

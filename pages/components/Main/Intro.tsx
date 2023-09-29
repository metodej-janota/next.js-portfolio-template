import { Box, useColorModeValue, Tooltip } from "@chakra-ui/react";
import Object3D from "../Sections/Objekt3D";

export default function Page() {
  return (
    <>
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
    </>
  );
}

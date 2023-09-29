import {
  Box,
  Text,
  useColorModeValue,
  Center
} from "@chakra-ui/react";

export default function SmallWithLogoLeft() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} mt={10} p={4}>
      <Center>
        <Text>© 2023 Metoděj Janota. Všechna práva vyhrazena.</Text>
      </Center>
    </Box>
  );
}

import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Contacts() {
  const toast = useToast();

  return (
    <Box mt={6}>
      <FormControl isRequired>
        <FormLabel>Vaše jméno</FormLabel>
        <Input placeholder="např. Pepa" />
      </FormControl>

      <FormControl isRequired mt={2}>
        <FormLabel>Vaše příjmení</FormLabel>
        <Input placeholder="např. Novák" />
      </FormControl>

      <FormControl isRequired mt={2}>
        <FormLabel>Vaše emailová adresa</FormLabel>
        <Input type="email" placeholder="např. priklad@priklad.cz" />
      </FormControl>

      <FormControl mt={2} isRequired>
        <FormLabel>Vaše zpráva</FormLabel>
        <Textarea
          placeholder="Napište mi sem Váš nápad, dotaz nebo komentář.."
          height={"150px"}
          resize={"none"}
        />
      </FormControl>

      <Button
        mt={6}
        colorScheme="teal"
        type="submit"
        as={motion.div}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        width={"100%"}
        onClick={() =>
          toast({
            title: "Email byl úspěšne odeslán",
            status: "success",
            isClosable: true,
          })
        }
      >
        Odeslat formulář
      </Button>
    </Box>
  );
}

import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
  useToast,
  Center,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

export default function Contacts() {
  const toast = useToast();

  return (
    <Box mt={6}>
      <FormControl isRequired>
        <FormLabel>Your name</FormLabel>
        <Input placeholder="e.g. Bob" />
      </FormControl>

      <FormControl isRequired mt={2}>
        <FormLabel>Your surname</FormLabel>
        <Input placeholder="e.g. Osbourne" />
      </FormControl>

      <FormControl isRequired mt={2}>
        <FormLabel>Your email address</FormLabel>
        <Input type="email" placeholder="e.g. example@example.com" />
      </FormControl>

      <FormControl mt={2} isRequired>
        <FormLabel>Your message</FormLabel>
        <Textarea
          placeholder="Write me here your idea, question or comment.."
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
            title: "Email sent successfully",
            status: "success",
            isClosable: true,
          })
        }
      >
        Odeslat formulář
      </Button>

      <Box>
        <Center mt={6}>
          <Stack spacing={2} align={"center"} w={"full"}>
            <Button
              w={"full"}
              as={motion.div}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.99 }}
              leftIcon={<BsGithub />}
              variant={"outline"}
            >
              <Center>
                <Text>GitHub</Text>
              </Center>
            </Button>

            <Button
              w={"full"}
              as={motion.div}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.99 }}
              leftIcon={<BsFacebook />}
              variant={"outline"}
            >
              <Center>
                <Text>Facebook</Text>
              </Center>
            </Button>

            <Button
              w={"full"}
              as={motion.div}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.99 }}
              leftIcon={<BsLinkedin />}
              variant={"outline"}
            >
              <Center>
                <Text>LinkdedIn</Text>
              </Center>
            </Button>
          </Stack>
        </Center>
      </Box>
    </Box>
  );
}

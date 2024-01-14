import {
  Card,
  Stack,
  Text,
  Heading,
  Image,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import MotionButton from "./MotionButton";

interface MotionCardProps {
  img: string;
  altImg: string;
  heading: string;
  podnadpis: string;
  text: string;
  href: string;
}

export default function ProjectCard({
  img,
  altImg,
  heading,
  text,
  podnadpis,
  href,
}: MotionCardProps) {
  return (
    <Card
      mt={3}
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={img}
        alt={altImg}
      />

      <Stack>
        <CardBody>
          <Heading size="md">{heading}</Heading>
          <Text py="2" color="pink.400">
            {podnadpis}
          </Text>
          <Text py="2">{text}</Text>
        </CardBody>

        <CardFooter>
          <MotionButton href={href} width="100%">
            Jump to GitHub
          </MotionButton>
        </CardFooter>
      </Stack>
    </Card>
  );
}

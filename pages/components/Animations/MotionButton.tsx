import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";

interface MotionButtonProps {
  children: ReactNode;
  width: string;
}

export default function MotionButton({
  children,
  width,
}: MotionButtonProps) {
  return (
    <Button
      as={motion.div}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      rightIcon={<ChevronRightIcon />}
      colorScheme="teal"
      mt={3}
      width={width + "%"}
    >
      {children}
    </Button>
  );
}

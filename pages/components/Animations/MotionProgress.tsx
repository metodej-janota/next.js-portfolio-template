import { useRef } from "react";
import { useInView } from "framer-motion";
import React, { ReactNode } from "react";
import { Box, Progress } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface MotionLinkLinkProps {
  children: ReactNode;
  value: number;
}

export default function MotionLink({ children, value }: MotionLinkLinkProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Box ref={ref} mt={2}>
      {children}
      <Progress
        as={motion.div}
        value={isInView ? value : 0}
        colorScheme="teal"
      />
    </Box>
  );
}

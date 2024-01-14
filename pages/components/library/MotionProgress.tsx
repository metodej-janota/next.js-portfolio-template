import { useInView } from "framer-motion";
import React, { ReactNode, useRef } from "react";
import { Box, Progress, Tooltip } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface MotionLinkLinkProps {
  children: ReactNode;
  value: number;
}

export default function MotionLink({ children, value }: MotionLinkLinkProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Box mt={2}>
      <Tooltip label={value + "%"} placement="right">
        {children}
      </Tooltip>

      <Progress
        as={motion.div}
        value={value}
        colorScheme="teal"
        borderRadius={4}
        ref={ref}
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      />
    </Box>
  );
}

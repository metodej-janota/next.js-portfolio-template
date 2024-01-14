import { Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

interface MotionExternalLinkProps {
  children: ReactNode;
  href: string;
}

export default function MotionExternalLink({
  children,
  href,
}: MotionExternalLinkProps) {
  return (
    <Link
      color="pink.400"
      isExternal
      as={motion.div}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.9 }}
      style={{ display: "inline-block" }}
    >
      <a href={href}>
        {" "}
        {children}
        <ExternalLinkIcon mx="2px" />{" "}
      </a>
    </Link>
  );
}

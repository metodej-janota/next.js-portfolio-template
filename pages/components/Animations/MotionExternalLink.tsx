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
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.9 }}
      style={{ display: "inline-block" }}
    >
      <Link href={href} color="pink.400" isExternal>
        <p>
          {children}
          <ExternalLinkIcon mx="2px" />{" "}
        </p>
      </Link>
    </motion.div>
  );
}

import { Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface MotionLinkLinkProps {
  children: ReactNode;
  href: string;
}

export default function MotionLink({ children, href }: MotionLinkLinkProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.9 }}
      style={{ display: "inline-block" }}
    >
      <Link href={href} color="pink.400">
        <p>
          {"#"}
          {children}
        </p>
      </Link>
    </motion.div>
  );
}

import React from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import About from "../Sections/About";
import Contacts from "../Sections/Contacts";
import Projects from "../Sections/Projects";

interface SiteProps {
  activePage: string;
}

const HomePage = () => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0, scale: 1 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <About />
    </motion.div>
  );
};

const ProjectsPage = () => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0, scale: 1 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <Projects />
    </motion.div>
  );
};

const ContactsPage = () => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0, scale: 1 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <Contacts />
    </motion.div>
  );
};

const Site: React.FC<SiteProps> = ({ activePage }) => {
  const getPageContent = () => {
    switch (activePage) {
      case "home":
        return <HomePage />;
      case "projects":
        return <ProjectsPage />;
      case "contacts":
        return <ContactsPage />;
      default:
        return <HomePage />;
    }
  };

  return <Box mt={2}>{getPageContent()}</Box>;
};

export default Site;

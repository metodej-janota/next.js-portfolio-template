import { Box } from "@chakra-ui/react";
import ProjectCard from "../Knihovna/MotionCard";

export default function Projects() {
  return (
    <Box mt={6}>
      <ProjectCard
        img="https://images.unsplash.com/photo-1620912189868-30778f884588?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2938&q=80"
        altImg="Muž používající grafický tablet"
        heading="JSPaint"
        podnadpis="Klauzurní práce 2. ročník"
        text="Tento projekt je zaměřen na pixelové malování na HTML5 canvas s širokým spektrem funkcí a možností jako je třeba malování obrázků pomocí jednotlivých pixelů."
        href="https://github.com/janx-xyz/JSPaint"
      />
      <ProjectCard
        img="https://images.unsplash.com/photo-1612772992614-bc2c2a2c3362?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
        altImg="Muž používající grafický tablet"
        heading="TableMaster"
        podnadpis="Rychlý projekt"
        text="TableMaster je výkonná webová aplikace pro tabuleky. S TableMasterem můžete jednoduše organizovat data do přehledných a strukturovaných tabulek."
        href="https://github.com/janx-xyz/TableMaster"
      />
    </Box>
  );
}

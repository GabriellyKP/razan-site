import { Box } from "@mui/material";
import MenuBar from "../menu";
import HomePage from "../../components/pages/home";
import AboutUs from "../../components/pages/about_us";
import Projects from "../../components/pages/projects";
import Services from "../../components/pages/services";
import Contact from "../../components/pages/contact";

export default function Home() {
  return (
    <Box display="flex" flexDirection="column">
      <MenuBar />
      <Box id="home">
        <HomePage />
      </Box>
      <Box id="about_us">
        <AboutUs />
      </Box>
      <Box id="projects">
        <Projects />
      </Box>
      <Box id="services">
        <Services />
      </Box>
      <Box id="contact">
        <Contact />
      </Box>
    </Box>
  );
}

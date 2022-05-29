import { Box } from "@mui/material";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";

const Home = () => {
  return (
    <Box sx={{ height: "95vh" }}>
      <Header />
      <Hero />
    </Box>
  );
};

export default Home;

import { Box } from "@mui/material";

const FooterNav = () => {
  return (
    <Box>
      <Box component="ul" className="nav">
        <Box component="li">
          <Box component="a" href="/" className="nav__item">
            Home
          </Box>
        </Box>
        <Box component="li">
          <Box component="a" href="/" className="nav__item">
            Business
          </Box>
        </Box>
        <Box component="li">
          <Box component="a" href="/" className="nav__item">
            About
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FooterNav;

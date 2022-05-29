import { Box, Button, Stack, Typography } from "@mui/material";
import TypeAnimation from "react-type-animation";

const Hero = () => {
  return (
    <Box
      sx={{
        height: "50rem",
      }}
    >
      <Box
        sx={{
          maxWidth: "75rem",
          height: "100%",
          mx: "auto",
          px: "5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography
              sx={{
                color: "black",
                fontSize: "4rem",
                fontWeight: "800",
                lineHeight: "69px",
              }}
            >
              Nnando is
            </Typography>
            <Typography
              color="primary"
              sx={{
                fontSize: "2rem",
                fontWeight: "800",
                marginBottom: "1rem",
                height: "3rem",
              }}
            >
              -{" "}
              <TypeAnimation
                cursor={false}
                sequence={[
                  "Agriculture",
                  2000,
                  "Real Estate",
                  2000,
                  "Oil & Gas",
                  2000,
                  "Health Care",
                  2000,
                  "Lifestyle",
                  2000,
                  " Entertainment",
                  2000,
                ]}
                wrapper="span"
                repeat={Infinity}
              />{" "}
            </Typography>
            <Typography
              sx={{
                color: "black",
                fontSize: "1rem",
                fontWeight: "400",
                lineHeight: "28px",
                marginBottom: "2rem",
              }}
            >
              We are a fast growing multi-faceted organisation with business
              <br />
              tentacles in several industries to bring top-notch services
            </Typography>
            <Button
              variant="outlined"
              size="large"
              sx={{
                color: "#000",
                borderColor: "#000",
                fontSize: "1.25rem",
                fontWeight: "700",
              }}
            >
              Learn More
            </Button>
          </Box>
          <Box
            component="img"
            src={require("../../assets/images/Together.webp")}
            alt="together"
            sx={{
              width: "40rem",
              height: "27rem",
              borderRadius: "10px",
            }}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default Hero;

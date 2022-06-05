import { Box, Button, Stack, Typography } from "@mui/material";
import TypeAnimation from "react-type-animation";

const Hero = () => {
  return (
    <Box
      sx={{
        height: "40rem",
      }}
    >
      <Box
        sx={{
          maxWidth: "75rem",
          height: "100%",
          mx: "auto",
          px: "5px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            width: "100%",
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "black",
                fontSize: "4rem",
                fontWeight: "600",
                lineHeight: "69px",
                fontFamily: "Barlow",
              }}
            >
              Nnando is
            </Typography>
            <Typography
              color="primary"
              sx={{
                fontSize: "2rem",
                fontWeight: "800",
                fontFamily: "Barlow",
                marginBottom: "1rem",
                height: "3rem",
              }}
            >
              -{" "}
              <TypeAnimation
                cursor={false}
                sequence={[
                  "Agriculture",
                  4000,
                  "Real Estate",
                  4000,
                  "Oil & Gas",
                  4000,
                  "Health Care",
                  4000,
                  "Lifestyle",
                  4000,
                  " Entertainment",
                  4000,
                ]}
                wrapper="a"
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

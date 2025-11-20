import { useRef } from "react";
import { Box, Typography, Button, Card } from "@mui/material";
import { useBannerGsap } from "../../animations/dashboard/banner.gsap";

export default function Banner() {
  const bannerRef = useRef<HTMLDivElement>(null!);
  const titleRef = useRef<HTMLHeadingElement>(null!);
  const descRef = useRef<HTMLParagraphElement>(null!);
  const buttonRef = useRef<HTMLButtonElement>(null!);
  const imageRef = useRef<HTMLImageElement>(null!);

  useBannerGsap({ bannerRef, titleRef, descRef, buttonRef, imageRef });

  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: "16px",
        marginTop: "30px",
        bgcolor: "#fff",
        border: "1px solid #eaeaea",
        px: 4,
        py: 5,
      }}
      ref={bannerRef}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 4,
        }}
      >
        <Box sx={{ maxWidth: "100%" }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "#0b2d4a",
              mb: 1,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
            ref={titleRef}
          >
            EXAMS <span style={{ color: "#0047AB" }}>TIME</span>
          </Typography>

          <Typography
            sx={{
              color: "#6f7175",
              fontSize: "1rem",
              lineHeight: 1.6,
              maxWidth: "90%",
              mb: 3,
            }}
            ref={descRef}
          >
            Here we are, Are you ready to fight? Don’t worry, we prepared some
            tips to be ready for your exams.
          </Typography>

          <Typography
            sx={{
              fontStyle: "italic",
              color: "#9aa0a6",
              mb: 3,
            }}
          >
            “Nothing happens until something moves” – Albert Einstein
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#0047AB",
              textTransform: "none",
              fontSize: "0.94rem",
              fontWeight: 600,
              px: 4,
              py: 1.2,
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#28b6b9",
              },
            }}
            ref={buttonRef}
          >
            View exams tips
          </Button>
        </Box>

        <Box
          ref={imageRef}
          component="img"
          src="/images/bg-1.jpg"
          alt="exam illustration"
          sx={{
            display: { xs: "none", md: "block" },
            maxWidth: "20%",
            height: "100%",
            borderRadius: "12px",
          }}
        />
      </Box>
    </Card>
  );
}

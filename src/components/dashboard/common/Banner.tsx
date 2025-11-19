import { Box, Typography, Button, Grid, Card } from "@mui/material";

export default function Banner() {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: "16px",
        marginTop: "30px",
        bgcolor: "#ffff",
        border: "1px solid #eaeaea",
        px: 4,
        py: 5,
      }}
    >
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "#0b2d4a",
              mb: 1,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            EXAMS <span style={{ color: "#0047AB" }}>TIME</span>
          </Typography>

          <Typography
            sx={{
              color: "#6f7175",
              fontSize: "1.1rem",
              lineHeight: 1.6,
              maxWidth: "90%",
              mb: 3,
            }}
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
              fontSize: "1rem",
              fontWeight: 600,
              px: 4,
              py: 1.2,
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#28b6b9",
              },
            }}
          >
            View exams tips
          </Button>
        </Grid>

        <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
          <Box
            component="img"
            src="/images/exams-illustration.png"
            alt="exam illustration"
            sx={{
              width: "100%",
              maxWidth: "420px",
            }}
          />
        </Grid>
      </Grid>
    </Card>
  );
}

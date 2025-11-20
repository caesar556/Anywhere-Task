import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import { HeroSection, QuoteText, StyledButton } from "./styles";
import { useAppDispatch } from "../../../hoc/hooks";
import { login } from "../../../redux/features/authSlice";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

import { useHeroGsap } from "../../animations/home/home.gsap";

export default function Welcome() {
  const theme = useTheme();
  useMediaQuery(theme.breakpoints.down("md"));

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    dispatch(login());
    navigate("/dashboard");
  };

  const titleRef = useRef<HTMLHeadingElement>(null!);
  const subtitleRef = useRef<HTMLHeadingElement>(null!);
  const buttonsRef = useRef<HTMLButtonElement>(null!);

  useHeroGsap({
    titleRef,
    subtitleRef,
    buttonsRef,
  });

  return (
    <Box sx={{ minHeight: "100dvh", bgcolor: "#f5f5f5" }}>
      <HeroSection elevation={0}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", py: { xs: 4, md: 8 } }}>
            <Typography
              ref={titleRef}
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", md: "4rem" },
                fontWeight: "bold",
                mb: 2,
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              }}
            >
              EXAMS TIME
            </Typography>

            <Typography
              ref={subtitleRef}
              variant="h5"
              sx={{
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                mb: 4,
                opacity: 0.9,
                fontWeight: 300,
              }}
            >
              Here we are, Are you ready to fight? Don't worry, we prepared some
              tips to be ready for your exams.
            </Typography>

            <Card
              sx={{
                maxWidth: 600,
                mx: "auto",
                bgcolor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                mt: 4,
              }}
            >
              <CardContent sx={{ py: 3 }}>
                <QuoteText
                  variant="h6"
                  sx={{
                    fontSize: { xs: "1rem", md: "1.25rem" },
                    color: "white",
                  }}
                >
                  "Nothing happens until something moves" - Albert Einstein
                </QuoteText>
              </CardContent>
            </Card>

            <Box
              sx={{
                width: "80%",
                height: "2px",
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
                mx: "auto",
                my: 4,
              }}
            />

            <Box ref={buttonsRef}>
              <StyledButton
                onClick={handleLogin}
                variant="contained"
                size="large"
                sx={{ px: 4 }}
              >
                Login Now
              </StyledButton>
            </Box>
          </Box>
        </Container>
      </HeroSection>
    </Box>
  );
}

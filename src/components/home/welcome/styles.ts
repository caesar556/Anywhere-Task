import { styled } from "@mui/material/styles";
import { Paper, Typography, Button } from "@mui/material";

export const HeroSection = styled(Paper)(({ theme }) => ({
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  color: "white",
  padding: theme.spacing(8, 0),
  marginBottom: theme.spacing(6),
  borderRadius: 0,
  position: "relative",
  overflow: "hidden",
}));

export const QuoteText = styled(Typography)(({ theme }) => ({
  fontStyle: "italic",
  textAlign: "center",
  margin: theme.spacing(4, 0),
  padding: theme.spacing(0, 2),
  position: "relative",
  "&::before, &::after": {
    content: '"\\201C"',
    fontSize: "3rem",
    position: "absolute",
    opacity: 0.3,
  },
  "&::before": {
    top: "-20px",
    left: "10px",
  },
  "&::after": {
    content: '"\\201D"',
    bottom: "-40px",
    right: "10px",
  },
}));

export const StyledButton = styled(Button)(() => ({
  background: "linear-gradient(45deg, #FF6B6B 30%, #FF8E53 90%)",
  border: 0,
  borderRadius: 25,
  color: "white",
  height: 48,
  padding: "0 30px",
  fontWeight: "bold",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  "&:hover": {
    background: "linear-gradient(45deg, #FF8E53 30%, #FF6B6B 90%)",
  },
}));
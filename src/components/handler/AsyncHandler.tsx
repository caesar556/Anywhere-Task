import { CircularProgress, Alert, Box } from "@mui/material";

interface AsyncHandlerProps {
  isLoading?: boolean;
  isError?: boolean;
  children: React.ReactNode;
  loadingText?: string;
  errorText?: string;
}

export function AsyncHandler({
  isLoading,
  isError,
  children,
  errorText = "Something went wrong 😕",
}: AsyncHandlerProps) {
  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="200px">
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box m={2}>
        <Alert severity="error">{errorText}</Alert>
      </Box>
    );
  }

  return <>{children}</>;
}
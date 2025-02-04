import LinkIcon from "@/components/icons/Link";
import useUrl from "@/hooks/url/useUrl";
import {
  Box,
  Button,
  CircularProgress,
  InputAdornment,
  Snackbar,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "./Header.css";

const Shortener = () => {
  const { register, handleSubmit, reset, formState } = useForm();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const { loading, createShortUrl } = useUrl();

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const onSubmit = async (data) => {
    try {
      await createShortUrl(data.originalUrl);
      reset();
      setSnackbarMessage("URL shortened successfully");
      setSnackbarOpen(true);
    } catch (error) {
      console.error(error);
      reset();
      setSnackbarMessage("Failed to shorten URL");
      setSnackbarOpen(true);
    }
  };

  return (
    <>
      <Box
        component={"form"}
        onSubmit={handleSubmit(onSubmit)}
        width="100%"
        className="shortener"
      >
        <TextField
          id="originalUrl"
          placeholder="https://"
          variant="outlined"
          fullWidth
          {...register("originalUrl", {
            required: "URL is required",
            pattern: { value: /^https?:\/\/.+/i, message: "Invalid URL" },
          })}
          error={!!formState.errors.originalUrl}
          helperText={formState.errors.originalUrl?.message}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LinkIcon width={20} height={20} className="icon-tada" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  variant="contained"
                  type="submit"
                  disabled={loading}
                  sx={{ minWidth: 100 }}
                >
                  {loading ? <CircularProgress size={24} /> : "Shorten"}
                </Button>
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      />
    </>
  );
};

export default Shortener;

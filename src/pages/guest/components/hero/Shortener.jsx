import LinkIcon from "@/components/icons/Link";
import useGuestUrl from "@/hooks/guest/useGuestUrl";
import { guestShorten } from "@/services/guestUrl/guestUrlService";
import {
  Box,
  Button,
  InputAdornment,
  Snackbar,
  TextField,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Shortener = () => {
  const { register, handleSubmit, reset, formState } = useForm();
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const { setUrl } = useGuestUrl();

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await guestShorten(data);
      setUrl(response);
      reset();
      setLoading(false);
      setSnackbarMessage("URL shortened successfully");
      setSnackbarOpen(true);
    } catch (error) {
      console.error(error);
      reset();
      setLoading(false);
      setSnackbarMessage("Failed to shorten URL");
      setSnackbarOpen(true);
    }
  };

  return (
    <>
      <Box
        component={"form"}
        onSubmit={handleSubmit(onSubmit)}
        maxWidth={700}
        className="shortener"
        marginInline={"auto"}
        marginBottom={1}
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
                  color="secondary"
                  type="submit"
                  disabled={loading}
                  sx={{ minWidth: 100, color: "secondary.contrastText" }}
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

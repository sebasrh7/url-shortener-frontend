import LinkIcon from "@/components/icons/Link";
import useGuestUrl from "@/hooks/guest/useGuestUrl";
import { guestShorten } from "@/services/guestUrl/guestUrlService";
import { Button, InputAdornment, TextField, styled } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "./Shortener.css";

const CssTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: " #eee",
    },
    "&:hover fieldset": {
      borderColor: " #9c27b0",
    },
    "&.Mui-focused fieldset": {
      borderColor: " #9c27b0",
    },
  },
});

const Shortener = () => {
  const { register, handleSubmit, reset, formState } = useForm();
  const [loading, setLoading] = useState(false);
  const { setUrl } = useGuestUrl();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await guestShorten(data);
      setUrl(response);
      reset();
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <form className="shortener" onSubmit={handleSubmit(onSubmit)}>
      <CssTextField
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
              <div className="icon-tada">
                <LinkIcon width={20} height={20} />
              </div>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <Button
                variant="outlined"
                color="inherit"
                type="submit"
                disabled={loading}
              >
                Shorten
              </Button>
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
};

export default Shortener;

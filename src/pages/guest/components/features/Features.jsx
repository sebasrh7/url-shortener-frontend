import ClickIcon from "@/components/icons/Click";
import CustomIcon from "@/components/icons/Custom";
import DashboardIcon from "@/components/icons/Dashboard";
import LinkIcon from "@/components/icons/Link";
import QrIcon from "@/components/icons/Qr";
import ShareIcon from "@/components/icons/Share";
import { useAuth } from "@/hooks/auth/useAuth";
import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import "./Features.css";

const Features = () => {
  const features = [
    {
      id: 1,
      icon: <LinkIcon width={42} height={42} />,
      title: "Shorten URLs",
      description: "Shorten your URLs with ease.",
    },
    {
      id: 2,
      icon: <ShareIcon width={42} height={42} />,
      title: "Share URLs",
      description: "Share your shortened URLs with the world.",
    },
    {
      id: 3,
      icon: <ClickIcon width={42} height={42} />,
      title: "Click Tracking",
      description: "Track the number of clicks on your URLs.",
    },
    {
      id: 4,
      icon: <CustomIcon width={42} height={42} />,
      title: "Custom URLs",
      description: "Create custom URLs for your links.",
    },
    {
      id: 5,
      icon: <QrIcon width={42} height={42} />,
      title: "QR Codes",
      description: "Generate QR codes for your URLs.",
    },
    {
      id: 6,
      icon: <DashboardIcon width={42} height={42} />,
      title: "Manage URLs",
      description: "Manage your URLs with ease.",
    },
  ];
  const { login } = useAuth();
  return (
    <Box component="section" className="features" bgcolor={"secondary.light"} >
      <Container>
        <Box sx={{ mb: 4 }} color={"secondary.contrastText"}>
          <Typography variant="h4" align="center">
            Features
          </Typography>
          <Typography variant="subtitle1" align="center">
            For full access to all features, please login.
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Button color="inherit" variant="outlined" onClick={login}>
              Login
            </Button>
          </Box>
        </Box>

        <Card raised={false}>
          <Grid container spacing={2}>
            {features.map((feature) => (
              <Grid
                item
                xs={12}
                md={6}
                key={feature.id}
                textAlign={"center"}
                sx={{ boxShadow: "1px 1px 0 0 rgba(0, 0, 0, 0.12)" }}
              >
                <Box sx={{ p: 6 }}>
                  {feature.icon}
                  <Typography variant="h6">{feature.title}</Typography>
                  <Typography variant="body1">{feature.description}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Card>
      </Container>
    </Box>
  );
};

export default Features;

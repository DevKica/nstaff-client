import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AnimatedPage from "./../utils/AnimatedPage";
import GoogleAndFooter from "../../components/public/GoogleAndFooter";
import { Box } from "@material-ui/core";

export default function LoginPage() {
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <AnimatedPage>
      <Container maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
            <TextField
              size="small"
              margin="normal"
              required
              fullWidth
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              size="small"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
            />
            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign in
            </Button>
          </Box>
          <GoogleAndFooter signIn={true} />
        </Box>
      </Container>
    </AnimatedPage>
  );
}

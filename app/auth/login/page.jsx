"use client";

// @mui
import Iconify from "@components/iconify/Iconify";
import { styled } from "@mui/material/styles";
import {
  Button,
  Divider,
  Stack,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import { signIn } from 'next-auth/react';
import { useRouter } from "@components/UseRouter";
// ----------------------------------------------------------------------

const Root = styled("main")(() => ({
  height: "100%",
  display: "flex",
  position: "relative",
}));

const Content = styled("div")(({ theme }) => ({
  width: 480,
  margin: "auto",
  display: "flex",
  minHeight: "100vh",
  justifyContent: "center",
  padding: theme.spacing(15, 2),
  [theme.breakpoints.up("md")]: {
    flexShrink: 0,
    padding: theme.spacing(15, 8, 0, 8),
  },
}));

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#3e3e3e",
    borderRadius:"8px",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#3e3e3e",
    borderRadius:"8px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#3e3e3e",
      borderRadius:"8px",
    },
    "&:hover fieldset": {
      borderColor: "#3e3e3e",
      borderRadius:"8px",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#3e3e3e",
      borderRadius:"8px",
    },
  },
});

export default function Login() {

  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const handleGoogleLogin = async () => {
  
    try {
      const result = await signIn('google'); // Replace 'provider_name' with the actual provider you're using (e.g., 'google', 'github', etc.)
      
      // Redirect the user to a specific page after successful login
      if (result.ok) {
        router.push('/jobs'); // Replace '/dashboard' with the desired URL to redirect the user after login
      }
    } catch (error) {
      console.error('Login failed:', error);
    }

  };

  const handleLinkedinLogin = async () => {  
    try {
      const result = await signIn('linkedin'); // Replace 'provider_name' with the actual provider you're using (e.g., 'google', 'github', etc.)
      
      // Redirect the user to a specific page after successful login
      if (result) {
        router.push('/jobs'); // Replace '/dashboard' with the desired URL to redirect the user after login
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <Root>
      <Content>
        <Stack sx={{ width: 1 }}>
          <Stack
            width={1}
            direction="column"
            spacing={2}
            sx={{ position: "relative", alignItems: "center" }}>
            <Button
              sx={{
                backgroundColor: "#fff",
                color: "#2e2e2e",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 4px",
                borderRadius:"8px",
                border: "0.5px solid",
                width: "350px",
                height: "60px",
                "&:hover": {
                  backgroundColor: "#fff",
                  boxShadow: "rgba(149, 157, 165, 0.4) 0px 8px 24px",
                },
              }}
              onClick={handleGoogleLogin}
              startIcon={
                <Iconify
                  icon="eva:google-fill"
                  color="#DF3E30"
                  sx={{ mr: 1 }}
                />
              }>
              Login with Google
            </Button>

            <Button
              width={1}
              sx={{
                backgroundColor: "#fff",
                color: "#2e2e2e",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 4px",
                border: "0.5px solid",
                borderRadius:"8px",
                width: "350px",
                height: "60px",

                "&:hover": {
                  backgroundColor: "#fff",
                  boxShadow: "rgba(149, 157, 165, 0.4) 0px 8px 24px",
                },
              }}
                onClick={handleLinkedinLogin}
              startIcon={
                <Iconify icon="il:linkedin" color="#006699" sx={{ mr: 1 }} />
              }>
              Login with Linkedin
            </Button>
          </Stack>
          <Divider
            sx={{
              my: 2.5,
              typography: "overline",
              color: "text.disabled",
              "&::before, ::after": {
                borderTopStyle: "dashed",
              },
            }}>
            OR
          </Divider>
          <Stack spacing={3}>
            <CssTextField name="email" label="Email address" />

            <CssTextField
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end">
                      <Iconify
                        icon={
                          showPassword ? "eva:eye-fill" : "eva:eye-off-fill"
                        }
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            sx={{
              bgcolor: "text.primary",
              borderRadius: "8px",
              height: "50px",
              my: 2,
              color: (theme) =>
                theme.palette.mode === "light" ? "common.white" : "main",
              "&:hover": {
                bgcolor: "text.primary",
                color: (theme) =>
                  theme.palette.mode === "light" ? "common.white" : "main",
              },
            }}>
            Login
          </LoadingButton>
        </Stack>
      </Content>
    </Root>
  );
}

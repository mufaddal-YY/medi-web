"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { useSession, signIn, signOut, SessionProvider } from "next-auth/react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { css } from "@emotion/react";
import { styled } from "@mui/material/styles";
import { LoadingButton } from "@mui/lab";
import {
  Grid,
  Typography,
  Button,
  Select,
  MenuItem,
  Divider,
  Stack,
  TextField,
  Autocomplete,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Link from "next/link";

const PersonalDetailsForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the form data or perform any validation

    // Navigate to the next form stage
    router.push("/forms/ProfessionalDetailsForm");
  };

  const { data: session, status } = useSession();
  const methods = useForm();

  const commonStyles = css({
    "& label.Mui-focused": {
      color: "#3e3e3e",
      borderRadius: "8px",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#3e3e3e",
      borderRadius: "8px",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#3e3e3e",
        borderRadius: "8px",
      },
      "&:hover fieldset": {
        borderColor: "#3e3e3e",
        borderRadius: "8px",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#3e3e3e",
        borderRadius: "8px",
      },
    },
  });

  const CssTextField = styled(TextField)(commonStyles);

  const CssDatePicker = styled(DatePicker)(commonStyles);

  const CssSelect = styled(Select)(commonStyles);

  const CssAutocomplete = styled(Autocomplete)(commonStyles);

  const CssMenuItem = styled(MenuItem)(commonStyles);

  const Root = styled("main")(() => ({
    height: "100%",
    display: "flex",
    position: "relative",
  }));

  const Content = styled("div")(({ theme }) => ({
    width: "100%",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(2, 2),
    [theme.breakpoints.up("lg")]: {
      flexShrink: 0,
      padding: theme.spacing(2, 20),
    },
  }));

  return (
    <>
      <section className="section-sp4">
        <div className="container">
          <div className="text-center">
            <h3 className="p-t20">Create your Resume</h3>
            <h6>Personal Details</h6>
          </div>
          <hr />
        </div>
      </section>

      <Root>
        <Content>
          <FormProvider {...methods} onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item flex={"center"} xs={12} md={12}>
                <Stack spacing={1}>
                  <Stack spacing={3} direction={{ md: "row", sm: "column" }}>
                    <Stack
                      spacing={1}
                      mb={3}
                      sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}>
                      <CssTextField label="First Name" name="firstName" />
                    </Stack>

                    <Stack
                      spacing={1}
                      mb={3}
                      sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}>
                      <CssTextField label="Last Name" name="lastName" />
                    </Stack>
                  </Stack>

                  <Stack spacing={3} direction={{ md: "row", sm: "column" }}>
                    <Stack
                      spacing={1}
                      mb={3}
                      sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}>
                      <CssTextField label="Bio" name="bio" />
                    </Stack>
                  </Stack>

                  <Stack spacing={3} direction={{ md: "row", sm: "column" }}>
                    <Stack
                      spacing={1}
                      mb={3}
                      sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}>
                      <CssTextField
                        label="Phone Number"
                        fullWidth
                        name="phone"
                      />
                    </Stack>

                    <Stack
                      spacing={1}
                      mb={3}
                      sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}>
                      <CssTextField label="Email" fullWidth name="email" />
                    </Stack>
                  </Stack>

                  <Stack spacing={3} direction={{ md: "row", sm: "column" }}>
                    <Stack
                      spacing={1}
                      mb={3}
                      sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}>
                      <CssTextField label="Address" name="address" />
                    </Stack>
                  </Stack>

                  <Stack spacing={3} direction={{ md: "row", sm: "column" }}>
                    <Stack
                      spacing={1}
                      mb={3}
                      sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}>
                      <CssDatePicker name="dob" label="Date of Birth" />
                    </Stack>

                    <Stack
                      spacing={1}
                      mb={3}
                      sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}>
                      <CssAutocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={gender}
                        renderInput={(params) => (
                          <CssTextField {...params} label="Gender" />
                        )}
                      />
                    </Stack>
                  </Stack>
                  
                </Stack>
              </Grid>
            </Grid>
          </FormProvider>
        </Content>
      </Root>
    </>
  );
};

export default PersonalDetailsForm;

const gender = [{ label: "Female" }, { label: "Male" }, { label: "Other" }];

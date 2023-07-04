"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"; // Import withRouter
import LoginPage from "@components/Auth/LoginPage";
import { styled } from "@mui/material/styles";
import {
  Grid,
  Stack,
  TextField,
  Typography,
  Autocomplete,
  Checkbox,
  Button,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { css } from "@emotion/react";
import { LoadingButton } from "@mui/lab";
import { useSnackbar } from "@components/snackbar";

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

const CssAutocomplete = styled(Autocomplete)(commonStyles);

const Resume = () => {
  
  const router = useRouter();

  const { enqueueSnackbar } = useSnackbar();

  const { data: session, status } = useSession();

  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dob, setDob] = useState(null);
  const [gender, setGender] = useState(null);
  const [address, setAddress] = useState("");
  const [qualifications, setQualifications] = useState([
    { degree: "", completingYear: "", institute: "" },
  ]);

  const [experiences, setExperiences] = useState([
    {
      jobTitle: "",
      companyName: "",
      startDate: null,
      endDate: null,
      stillWorking: false,
    },
  ]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://https://medi-web.vercel.app/api/candidate", {
        method: "POST",
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          gender: gender ? gender.name : "",
          address: address,
          dob: dob,
          bio: bio,
          phoneNumber: phoneNumber,
          experiences: experiences,
          qualifications: qualifications,
          creator: session?.user.id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        alert(
         "Resume created successfully!");
        router.push("/jobs");
      }
    } catch (error) {
      console.log(error);
    }

  };

  const handleAddQualification = () => {
    setQualifications([
      ...qualifications,
      { degree: "", completingYear: "", institute: "" },
    ]);
  };

  const handleRemoveQualification = (index) => {
    setQualifications((prevQualifications) =>
      prevQualifications.filter((_, i) => i !== index)
    );
  };

  const handleQualificationChange = (index, field, value) => {
    setQualifications((prevQualifications) => {
      const updatedQualifications = [...prevQualifications];
      updatedQualifications[index][field] = value;
      return updatedQualifications;
    });
  };

  const handleAddExperiences = () => {
    setExperiences((prevExperiences) => [
      ...prevExperiences,
      {
        jobTitle: "",
        companyName: "",
        startDate: null,
        endDate: null,
        stillWorking: false,
      },
    ]);
  };

  const handleRemoveExperiences = (index) => {
    setExperiences((prevExperiences) =>
      prevExperiences.filter((_, i) => i !== index)
    );
  };

  const handleExperiencesChange = (index, field, value) => {
    setExperiences((prevExperiences) => {
      const updatedExperiences = [...prevExperiences];
      updatedExperiences[index] = {
        ...updatedExperiences[index],
        [field]: value,
      };
      return updatedExperiences;
    });
  };

  if (session) {
    return (
      <>
        <div className="container">
          <div className="text-center">
            <h3 className="p-t20">Create your Resume</h3>
            <h6>Help us with your information</h6>
          </div>
          <hr />
        </div>

        <Root>
          <Content>
            <form onSubmit={handleFormSubmit}>
              <Grid container spacing={3}>
                <div className="container">
                  <div className="text-center">
                    <h6>Personal Details</h6>
                  </div>
                  <hr />
                </div>
                <Grid mb={3} item flex={"center"} xs={12} md={12}>
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
                        <CssTextField
                          onChange={(e) => setFirstName(e.target.value)}
                          label="First Name"
                          name="firstName"
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
                        <CssTextField
                          onChange={(e) => setLastName(e.target.value)}
                          label="Last Name"
                          name="lastName"
                        />
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
                          onChange={(e) => setBio(e.target.value)}
                          label="Bio"
                          name="bio"
                        />
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
                          name="phoneNumber"
                          onChange={(e) => setPhoneNumber(e.target.value)}
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
                        <CssTextField
                          onChange={(e) => setEmail(e.target.value)}
                          label="Email"
                          fullWidth
                          name="email"
                        />
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
                          onChange={(e) => setAddress(e.target.value)}
                          label="Address"
                          name="address"
                        />
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
                        <CssDatePicker
                          label="Date of Birth"
                          value={dob}
                          onChange={(date) => setDob(date)}
                          renderInput={(params) => <CssTextField {...params} />}
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
                        <Autocomplete
                          options={[
                            { name: "Male" },
                            { name: "Female" },
                            { name: "Other" },
                          ]}
                          getOptionLabel={(option) => option.name}
                          value={gender}
                          onChange={(event, newValue) => setGender(newValue)}
                          renderInput={(params) => (
                            <CssTextField {...params} label="Gender" />
                          )}
                        />
                      </Stack>
                    </Stack>
                  </Stack>
                </Grid>

                <div className="container">
                  <div className="d-flex flex-md-row flex-column justify-content-between p-10">
                    <div>
                      <h4>Work Experience</h4>
                      <p>Tell us about your recent work experiences</p>
                    </div>

                    <Button
                      size="medium"
                      variant="soft"
                      onClick={handleAddExperiences}
                      sx={{
                        bgcolor: "text.primary",
                        borderRadius: "8px",
                        height: "50px",
                        my: 2,
                        color: (theme) =>
                          theme.palette.mode === "light"
                            ? "common.white"
                            : "main",
                        "&:hover": {
                          bgcolor: "text.primary",
                          color: (theme) =>
                            theme.palette.mode === "light"
                              ? "common.white"
                              : "main",
                        },
                      }}>
                      Add More
                    </Button>
                  </div>
                  <hr />
                </div>

                <Grid mb={3} item flex={"center"} xs={12} md={12}>
                  <Stack spacing={1}>
                    <Stack spacing={3}>
                      {experiences.map((experience, index) => (
                        <React.Fragment key={`experience${index}`}>
                          <Stack spacing={3}>
                            <Stack
                              spacing={3}
                              direction={{ md: "row", sm: "column" }}>
                              <Stack
                                spacing={1}
                                mb={3}
                                sx={{
                                  width: "100%",
                                  display: "flex",
                                  flexDirection: "column",
                                }}>
                                <CssTextField
                                  label="Job Title"
                                  value={experience.jobTitle}
                                  onChange={(e) =>
                                    handleExperiencesChange(
                                      index,
                                      "jobTitle",
                                      e.target.value
                                    )
                                  }
                                  name={`jobTitle${index}`}
                                />
                              </Stack>
                              <Stack
                                spacing={1}
                                sx={{
                                  width: "100%",
                                  display: "flex",
                                  flexDirection: "column",
                                }}>
                                <CssTextField
                                  value={experience.companyName}
                                  onChange={(e) =>
                                    handleExperiencesChange(
                                      index,
                                      "companyName",
                                      e.target.value
                                    )
                                  }
                                  name={`companyName${index}`}
                                  label="Company Name"
                                />
                              </Stack>
                            </Stack>

                            <Stack
                              spacing={3}
                              direction={{ md: "row", sm: "column" }}>
                              <Stack
                                spacing={1}
                                mb={3}
                                sx={{
                                  width: "100%",
                                  display: "flex",
                                  flexDirection: "column",
                                }}>
                                <CssDatePicker
                                  label="Start Date"
                                  value={experience.startDate}
                                  onChange={(date) =>
                                    handleExperiencesChange(
                                      index,
                                      "startDate",
                                      date
                                    )
                                  }
                                  name={`startDate${index}`}
                                  renderInput={(params) => (
                                    <CssTextField {...params} />
                                  )}
                                />
                              </Stack>

                              <Stack
                                spacing={1}
                                sx={{
                                  width: "100%",
                                  display: "flex",
                                  flexDirection: "column",
                                }}>
                                <CssDatePicker
                                  label="End Date"
                                  value={experience.endDate}
                                  onChange={(date) =>
                                    handleExperiencesChange(
                                      index,
                                      "endDate",
                                      date
                                    )
                                  }
                                  name={`endDate${index}`}
                                  renderInput={(params) => (
                                    <CssTextField {...params} />
                                  )}
                                />
                              </Stack>
                            </Stack>

                            <div className="d-flex justify-content-end">
                              {index > 0 && (
                                <Button
                                  size="medium"
                                  variant="outlined"
                                  onClick={() => handleRemoveExperiences(index)}
                                  sx={{
                                    bgcolor: "text.white",
                                    borderRadius: "8px",
                                    mb: 2,

                                    color: (theme) =>
                                      theme.palette.mode === "light"
                                        ? "common.black"
                                        : "main",
                                    "&:hover": {
                                      bgcolor: "text.primary",
                                      color: (theme) =>
                                        theme.palette.mode === "light"
                                          ? "common.white"
                                          : "main",
                                    },
                                    borderColor: (theme) =>
                                      theme.palette.mode === "light"
                                        ? "common.black"
                                        : "main",
                                    "&:hover": {
                                      bgcolor: "text.primary",
                                      color: (theme) =>
                                        theme.palette.mode === "light"
                                          ? "common.white"
                                          : "main",
                                    },
                                  }}>
                                  Remove
                                </Button>
                              )}
                            </div>
                          </Stack>
                        </React.Fragment>
                      ))}
                    </Stack>
                  </Stack>
                </Grid>

                <div className="container">
                  <div className="d-flex flex-md-row flex-column justify-content-between p-10">
                    <div>
                      <h4>Educational Details</h4>
                      <p>Tell us about your educational qualifications</p>
                    </div>
                    <Button
                      size="medium"
                      variant="soft"
                      onClick={handleAddQualification}
                      sx={{
                        bgcolor: "text.primary",
                        borderRadius: "8px",
                        height: "50px",
                        my: 2,
                        color: (theme) =>
                          theme.palette.mode === "light"
                            ? "common.white"
                            : "main",
                        "&:hover": {
                          bgcolor: "text.primary",
                          color: (theme) =>
                            theme.palette.mode === "light"
                              ? "common.white"
                              : "main",
                        },
                      }}>
                      Add More
                    </Button>
                  </div>

                  <hr />
                </div>

                <Grid mb={3} item flex={"center"} xs={12} md={12}>
                  <Stack spacing={1}>
                    <Stack spacing={3}>
                      {qualifications.map((qualification, index) => (
                        <React.Fragment key={`qualification${index}`}>
                          <Stack
                            spacing={3}
                            direction={{ md: "row", sm: "column" }}>
                            <Stack
                              spacing={1}
                              mb={3}
                              sx={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                              }}>
                              <CssTextField
                                label="Qualification"
                                value={qualification.degree}
                                onChange={(e) =>
                                  handleQualificationChange(
                                    index,
                                    "degree",
                                    e.target.value
                                  )
                                }
                                name={`degree${index}`}
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
                              <CssTextField
                                label="Completing Year"
                                value={qualification.completingYear}
                                onChange={(e) =>
                                  handleQualificationChange(
                                    index,
                                    "completingYear",
                                    e.target.value
                                  )
                                }
                                name={`completingYear${index}`}
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
                              <CssTextField
                                label="Institute"
                                fullWidth
                                value={qualification.institute}
                                onChange={(e) =>
                                  handleQualificationChange(
                                    index,
                                    "institute",
                                    e.target.value
                                  )
                                }
                                name={`institute${index}`}
                              />
                            </Stack>
                          </Stack>

                          <div className="d-flex justify-content-end">
                            {index > 0 && (
                              <Button
                                size="medium"
                                variant="outlined"
                                onClick={() => handleRemoveQualification(index)}
                                sx={{
                                  bgcolor: "text.white",
                                  borderRadius: "8px",
                                  mb: 2,
                                  color: (theme) =>
                                    theme.palette.mode === "light"
                                      ? "common.black"
                                      : "main",
                                  "&:hover": {
                                    bgcolor: "text.primary",
                                    color: (theme) =>
                                      theme.palette.mode === "light"
                                        ? "common.white"
                                        : "main",
                                  },
                                  borderColor: (theme) =>
                                    theme.palette.mode === "light"
                                      ? "common.black"
                                      : "main",
                                  "&:hover": {
                                    bgcolor: "text.primary",
                                    color: (theme) =>
                                      theme.palette.mode === "light"
                                        ? "common.white"
                                        : "main",
                                  },
                                }}>
                                Remove
                              </Button>
                            )}
                          </div>
                        </React.Fragment>
                      ))}
                    </Stack>

                    <LoadingButton
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                      sx={{
                        bgcolor: "text.primary",
                        borderRadius: "8px",
                        height: "60px",
                        my: 2,
                        fontSize: "18px",
                        color: (theme) =>
                          theme.palette.mode === "light"
                            ? "common.white"
                            : "main",
                        "&:hover": {
                          bgcolor: "text.primary",
                          color: (theme) =>
                            theme.palette.mode === "light"
                              ? "common.white"
                              : "main",
                        },
                      }}>
                      Save Details
                    </LoadingButton>
                  </Stack>
                </Grid>
              </Grid>
            </form>
          </Content>
        </Root>
      </>
    );
  }

  return (
    <>
      <LoginPage />
    </>
  );
};

export default Resume;

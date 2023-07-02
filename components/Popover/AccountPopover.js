"use client";
import { useState } from "react";

// next
import { useRouter } from "@components/UseRouter";

// @mui
import { alpha } from "@mui/material/styles";
import { Box, Divider, Typography, Stack, MenuItem, Grid } from "@mui/material";

// components
import { CustomAvatar } from "../../components/custom-avatar";
import { useSnackbar } from "../../components/snackbar";
import MenuPopover from "../../components/menu-popover";
import { IconButtonAnimate } from "../../components/animate";
import logo from "@assets/images/logo.png";
import { useSession, signIn, signOut } from "next-auth/react";
import Iconify from "@components/iconify/Iconify";
// ----------------------------------------------------------------------

const OPTIONS = [

  {
    label: "Home",
    linkTo: "/",
    icon: <Iconify icon="oi:home" color="#DF3E30" />,
  },

  {
    label: "Profile",
    linkTo: "/candidates/profile",
    icon: <Iconify icon="iconamoon:profile-fill" color="#DF3E30" />,
  },
  
];

export default function AccountPopover() {
  const { data: session } = useSession();
  const userEmail = session?.user?.email;

  const { replace, push } = useRouter();

  const { enqueueSnackbar } = useSnackbar();

  const [openPopover, setOpenPopover] = useState(null);

  const handleOpenPopover = (event) => {
    setOpenPopover(event.currentTarget);
  };

  const handleClosePopover = () => {
    setOpenPopover(null);
  };

  const handleClickItem = (path) => {
    handleClosePopover();
    push(path);
  };

  return (
    <>
      <Grid>
        <IconButtonAnimate
          onClick={handleOpenPopover}
          sx={{
            p: 0,
            ...(openPopover && {
              "&:before": {
                zIndex: 99999,
                content: "''",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                position: "absolute",
                bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
              },
            }),
          }}>
          <CustomAvatar
            src={session?.user?.image}
            alt={session?.user?.name}
            name={session?.user?.name}
          />
        </IconButtonAnimate>
      </Grid>

      <MenuPopover
        open={openPopover}
        onClose={handleClosePopover}
        sx={{ width: 200, p: 0, zIndex: 99999 }}>
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography
            variant="subtitle2"
            sx={{ color: "text.secondary" }}
            noWrap>
            {session?.user?.name}
          </Typography>

          <Typography variant="body2" noWrap>
            {session?.user?.email}
          </Typography>
        </Box>
        <Divider sx={{ borderStyle: "dashed" }} />

        {OPTIONS.map((option) => (
          <MenuItem
            sx={{ m: 1 }}
            key={option.label}
            onClick={() => handleClickItem(option.linkTo)}>
            {option.icon} {option.label}
          </MenuItem>
        ))}
        <Divider sx={{ color: "#000", borderStyle: "dashed" }} />

        <MenuItem onClick={signOut} sx={{ m: 1 }}>
          <Iconify icon="solar:logout-2-bold" color="#DF3E30" /> Logout
        </MenuItem>
      </MenuPopover>
    </>
  );
}

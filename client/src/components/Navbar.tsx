import {
  MoreVert,
  Notifications,
  SearchRounded,
  WebStories,
} from "@mui/icons-material";
import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Stack,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

interface NavbarProps {
  filter: string
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar: React.FC<NavbarProps> = ({filter, setFilter}) => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar
      sx={{ backgroundColor: 'rgba(17, 25, 40, 0.5)', backdropFilter: "blur(8px) saturate(180%)", height: '64px'}}>
      <StyledToolbar>
        <Stack direction="row" spacing={2} alignItems="center">
          <WebStories />
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            E Books
          </Typography>
        </Stack>
        <Box sx={{ flexGrow: 1, mx: 10 }}>
          <Search>
            <SearchIconWrapper>
              <SearchRounded />
            </SearchIconWrapper>
            <StyledInputBase
              value={filter}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={e => {setFilter(e.target.value)}}
              sx={{width: '100%'}}
            />
          </Search>
        </Box>
        <Stack
          direction="row"
          spacing={1}
          sx={{ display: { xs: "none", md: "flex" } }}
          alignItems="center"
        >
          <IconButton
            size="large"
            aria-label="show notifications"
            color="inherit"
          >
            <Badge color="error" badgeContent={0} max={999}>
              <Notifications />
            </Badge>
          </IconButton>
          <Avatar
            src="https://source.unsplash.com/random"
            alt="avatar"
            sx={{ width: 30, height: 30 }}
            onClick={(e) => setOpen(true)}
          />
        </Stack>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="show more"
            aria-haspopup="true"
            color="inherit"
            onClick={(e) => setOpen(true)}
          >
            <MoreVert />
          </IconButton>
        </Box>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
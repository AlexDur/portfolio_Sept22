import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
/* import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import e from "express"; */

export default function Navigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(e, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" />
        <BottomNavigationAction label="Favorites" />
        <BottomNavigationAction label="Nearby" />
      </BottomNavigation>
    </Box>
  );
}

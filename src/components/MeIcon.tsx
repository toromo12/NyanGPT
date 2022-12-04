import { Box } from "@mui/material";
import React from "react";

function MeIcon() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "32px",
        height: "32px",
        backgroundColor: "grey",
      }}
    >
      <Box>ME</Box>
    </Box>
  );
}

export default MeIcon;

import { useState } from "react";
import { Container, Stack, Box, AppBar, Typography } from "@mui/material";
import HeartIcon from "./assets/heart.svg";

function App() {
  return (
    <Container>
      <AppBar sx={{ padding: "0.5rem" }}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <img src={HeartIcon} alt="" height="35" />
          <Typography fontFamily="Dancing Script" fontSize="2rem">
            Memories
          </Typography>
        </Stack>
      </AppBar>
    </Container>
  );
}

export default App;

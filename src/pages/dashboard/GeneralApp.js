import React from "react";
import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Chats from "./Chats";
import Conversation from "../../components/Conversation";
import Contact from "../../components/Contact";

const GeneralApp = () => {
  const theme = useTheme();

  return (
    <Stack direction="row">
      <Chats />
      <Box
        sx={{
          height: "100%",
          width: "calc(100vw - 740px)",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#f0f4fa"
              : theme.palette.background.default,
        }}
      >
        <Conversation />
      </Box>
      <Contact />
    </Stack>
  );
};

export default GeneralApp;

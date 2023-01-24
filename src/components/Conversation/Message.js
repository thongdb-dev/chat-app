import { Box, Stack } from "@mui/material";
import React from "react";
import { Chat_History } from "../../data";
import { DocumentMessage, LinkMessage, MediaMessage, ReplyMessage, TextMessage, Timeline } from "./MessageTypes";

const Message = () => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((el) => {
          switch (el.type) {
            case "divider":
              return <Timeline el={el} />;
            case "msg":
              switch (el.subtype) {
                case "img":
                  return <MediaMessage el={el} />;
                case "doc":
                  return <DocumentMessage el={el} />;
                case "link":
                  return <LinkMessage el={el} />
                case "reply":
                  return <ReplyMessage el={el} />;
                default:
                  return <TextMessage el={el} />
              }
            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;

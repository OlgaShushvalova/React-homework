import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Link } from "react-router-dom";
import ListItemText from "@mui/material/ListItemText";
import CommentIcon from "@mui/icons-material/Comment";
import IconButton from "@mui/material/IconButton";
import { useContext } from "react";
import { chatListContext } from "../../Router/context";
import "./ChatList.css";

export function ChatList() {
  const chatList = useContext(chatListContext);
  const newChatList = { ...chatList };
  delete newChatList["id0"];
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "#2196f38f" }}>
      {Object.keys(newChatList).map((id) => (
        <Link className="link-chat" to={"/chats/" + id}>
          <ListItem
            key={id}
            disableGutters
            secondaryAction={
              <IconButton>
                <CommentIcon />
              </IconButton>
            }
          >
            <ListItemText primary={chatList[id].name} />
          </ListItem>
        </Link>
      ))}
    </List>
  );
}

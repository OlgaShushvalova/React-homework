import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Link } from "react-router-dom";
import ListItemText from "@mui/material/ListItemText";
import CommentIcon from "@mui/icons-material/Comment";
import IconButton from "@mui/material/IconButton";

import "./ChatList.css";
//import { useSelector } from "react-redux";
//import { chatListSelector } from "../../Store/Chats/selectors";

export function ChatList({ chatList }) {
  //const  = useSelector(chatListSelector);
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "#2196f38f" }}>
      {chatList &&
        chatList.map((chat) => (
          <Link className="link-chat" to={"/chats/" + chat.id}>
            <ListItem
              key={chat.id}
              disableGutters
              secondaryAction={
                <IconButton>
                  <CommentIcon />
                </IconButton>
              }
            >
              <ListItemText primary={chat.name} />
            </ListItem>
          </Link>
        ))}
    </List>
  );
}

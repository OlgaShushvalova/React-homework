import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CommentIcon from "@mui/icons-material/Comment";
import IconButton from "@mui/material/IconButton";
import { CHAT_LIST } from "./Constants";

export function ChatList() {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "#2196f38f" }}>
      {CHAT_LIST.map(({ id, name }) => (
        <ListItem
          key={id}
          disableGutters
          secondaryAction={
            <IconButton>
              <CommentIcon />
            </IconButton>
          }
        >
          <ListItemText primary={name} />
        </ListItem>
      ))}
    </List>
  );
}

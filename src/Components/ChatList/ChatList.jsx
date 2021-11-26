import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CommentIcon from "@mui/icons-material/Comment";
import IconButton from "@mui/material/IconButton";
import { v4 as uuidv4 } from "uuid";

const CHAT_LIST = [
  { id: uuidv4(), name: "Новые товары" },
  { id: uuidv4(), name: "Распродажа" },
  { id: uuidv4(), name: "Вакансии" },
];

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

import { useState, useEffect, useRef } from "react";
import "./MessageForm.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from "uuid";

export function MessageForm({ messageList, setMessageList }) {
  const [messageAuthor, setMessageAuthor] = useState("");
  const [messageText, setMessageText] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [messageText]);

  const handleAuthorChange = (e) => setMessageAuthor(e.target.value);
  const handleTextChange = (e) => setMessageText(e.target.value);

  const handleAdd = (e) => {
    const newMessage = {
      id: uuidv4(),
      author: messageAuthor,
      text: messageText,
    };

    setMessageAuthor("");
    setMessageText("");
    return setMessageList([...messageList, newMessage]);
  };

  return (
    <Box
      className="message-form"
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      action="#"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <TextField
        id="outlined-basic"
        label="Имя"
        variant="outlined"
        value={messageAuthor}
        onChange={handleAuthorChange}
        size="small"
      />
      <TextField
        id="outlined-basic"
        label="Текст сообщения"
        variant="outlined"
        value={messageText}
        onChange={handleTextChange}
        inputRef={inputRef}
      />
      <Button variant="contained" onClick={handleAdd}>
        Отправить
      </Button>
    </Box>
  );
}

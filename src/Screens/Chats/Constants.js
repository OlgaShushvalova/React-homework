import { v4 as uuidv4 } from "uuid";

export const FIRST_MESSAGES = {
  id: uuidv4(),
  author: "Бот",
  text: "Приветствуем Вас в нашем магазине. Оставьте Ваше сообщение.",
};

export const BOT_MESSAGES = {
  id: uuidv4(),
  author: "Бот",
  text: "Спасибо, Ваше сообщение очень важно для нас!",
};

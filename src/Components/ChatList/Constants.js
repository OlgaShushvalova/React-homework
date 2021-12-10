import { v4 as uuidv4 } from "uuid";

export const FIRST_MESSAGES = {
  id: uuidv4(),
  author: "Бот",
  text: "Приветствуем Вас в нашем магазине. Выберете чат.",
};

export const BOT_MESSAGES = {
  id: uuidv4(),
  author: "Бот",
  text: "Спасибо, Ваше сообщение очень важно для нас!",
};

export const INIT_CHATS = {
  id0: {
    name: "Чат магазина",
    messages: [
      {
        id: uuidv4(),
        text: "Приветствуем Вас в нашем магазине. Выберите чат.",
        author: "Бот",
      },
    ],
  },
  id1: {
    name: "Новые товары",
    messages: [
      {
        id: uuidv4(),
        text: "Добро пожаловать в чат, посвященный новым товарам нашего магазина",
        author: "Бот",
      },
    ],
  },
  id2: {
    name: "Распродажа",
    messages: [
      {
        id: uuidv4(),
        text: "Добро пожаловать в чат, посвященный действующим распродажам нашего магазина",
        author: "Бот",
      },
    ],
  },
  id3: {
    name: "Вакансии",
    messages: [
      {
        id: uuidv4(),
        text: "Добро пожаловать в чат, посвященный имеющимся вакансиям нашего магазина",
        author: "Бот",
      },
    ],
  },
};

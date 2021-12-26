import {
  toggleUserNameAction,
  changeUserNameAction,
} from "../../Store/Profile/actions";
import { useDispatch, useSelector } from "react-redux";
import { profileSelector } from "../../Store/Profile/selectors";
import Checkbox from "@mui/material/Checkbox";
import "./Profile.css";
import firebase from "firebase";
import { useEffect } from "react";
import { addMessageWithThunk } from "../../Store/Messages/actions";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const Profile = () => {
  const dispatch = useDispatch();
  const { userName, showName } = useSelector(profileSelector);

  const handleInitFirebaseProfile = async () => {
    const id = firebase.auth().currentUser.uid;

    await firebase
      .database()
      .ref("profile")
      .child(id)
      .child("userName")
      .on("value", (snapshot) => {
        dispatch(changeUserNameAction({ name: snapshot.val() }));
      });
  };

  useEffect(() => {
    handleInitFirebaseProfile();
  }, []);

  const handleToggleShowName = () => {
    dispatch(toggleUserNameAction());
    dispatch(
      addMessageWithThunk({
        chatId: "id1",
        message: "text",
        author: "Bob",
      })
    );
  };
  const handleNameChange = (e) => {
    const db = firebase.database();
    const id = firebase.auth().currentUser.uid;
    db.ref("profile").child(id).child("userName").set(e.target.value);
  };

  return (
    <div>
      <header className="Profile-header"> Страница профиля </header>
      <main>
        <input value={userName} onChange={handleNameChange} />
        <Checkbox
          {...label}
          checked={showName}
          value={showName}
          onChange={handleToggleShowName}
          color="secondary"
        />
        <span>Показать имя</span>
        {showName && <div>{userName}</div>}
        <div>
          <button>Отправить</button>
        </div>
      </main>
    </div>
  );
};

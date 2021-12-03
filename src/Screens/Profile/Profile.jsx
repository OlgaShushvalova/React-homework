import { toggleUserNameAction } from "../../Store/Profile/actions";
import { useDispatch, useSelector } from "react-redux";
import { profileSelector } from "../../Store/Profile/selectors";
import Checkbox from "@mui/material/Checkbox";
import "./Profile.css";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const Profile = () => {
  const dispatch = useDispatch();
  const { userName, showName } = useSelector(profileSelector);
  const handleToggleShowName = () => {
    dispatch(toggleUserNameAction());
  };

  return (
    <div>
      <header className="Profile-header"> Страница профиля </header>
      <main>
        <input type="text" label="Имя" />
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

import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogActionWithThunk } from "../../Store/Dog/actions";
import { dogSelector } from "../../Store/Dog/selectors";
import "./Dogs.css";

export const Dogs = () => {
  const { loading, error, dogUrl } = useSelector(dogSelector);
  const dispatch = useDispatch();

  const handleGetDogs = () => {
    dispatch(getDogActionWithThunk());
  };

  useEffect(() => {
    handleGetDogs();
  }, [dispatch]);

  if (loading) {
    return (
      <div className="progress">
        <CircularProgress color="secondary" />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <div>Ошибка</div>
        <button onClick={handleGetDogs}>Обновить страницу</button>
      </div>
    );
  }
  return (
    <div>
      <img className="image" src={dogUrl} alt="" />
    </div>
  );
};

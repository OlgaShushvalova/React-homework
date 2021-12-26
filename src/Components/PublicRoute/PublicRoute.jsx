import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { ROUTES } from "../../Router/Constants";
import { profileAuthSelector } from "../../Store/Profile/selectors";

export const PublicRoute = ({ ...rest }) => {
  const auth = useSelector(profileAuthSelector);
  return !auth ? <Route {...rest} /> : <Redirect to={ROUTES.PROFILE} />;
};

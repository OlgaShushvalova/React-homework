import { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../Router/Constants";
import firebase from "firebase";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSignIn = async () => {
    setError("");
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div>
      <div>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div>
        <button onClick={handleSignIn}>Sign in</button>
      </div>
      {error && <div>{error}</div>}
      <div>
        Не зарегистрированы? <Link to={ROUTES.SIGN_UP}>Sign up</Link>
      </div>
    </div>
  );
};

import { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../Router/Constants";
import firebase from "firebase";

export const SingUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSignUp = async () => {
    setError("");
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
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
        <button onClick={handleSignUp}>Sign up</button>
      </div>
      {error && <div>{error}</div>}
      <div>
        Уже зарегистрированы? <Link to={ROUTES.SIGN_IN}>Sign in</Link>
      </div>
    </div>
  );
};

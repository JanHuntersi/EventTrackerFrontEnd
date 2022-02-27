import { MouseEvent, useRef, useState } from 'react';
import { Redirect } from 'react-router';
import { useAuth } from '../context/AuthContext';

function LoginPage() {
  const { currentUser, loginWitGoogle, loginWitEmailAndPassword, registerWithIdToken } = useAuth();
  // eslint-disable-next-line array-bracket-spacing
  const [ idToken, setIdToken ] = useState<string | null>(null);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  async function onSubmit(event: MouseEvent) {
    event.preventDefault();

    const email = emailRef.current!.value;
    const password = passwordRef.current!.value;

    const resp = await loginWitEmailAndPassword(email, password);
    if (!resp.sucess && resp.idToken) {
      setIdToken(resp.idToken);
    }
  };

  async function register(event: MouseEvent) {
    event.preventDefault();
    const result = await registerWithIdToken(idToken!, { data: { username: 'audioxd1' } });
    console.log(result);
  };

  async function googleLogin() {
    const resp: any = await loginWitGoogle();
    if (!resp.sucess && resp.idToken) {
      setIdToken(resp.idToken);
    }
  }

  return (
    <div>
      { !idToken && (<>
        <form>
          <label>Email</label><br />
          <input type="email" ref={emailRef} /><br />
          <label>Password</label><br />
          <input type="password" ref={passwordRef} /><br />
          <button onClick={onSubmit}>Login</button>
        </form><br /><button onClick={googleLogin}>Google Login</button>
      </>) }
      { idToken && <button onClick={register}>Register</button> }


      { !!currentUser && <Redirect to="/profile" />}
    </div>
  );
}

export default LoginPage;

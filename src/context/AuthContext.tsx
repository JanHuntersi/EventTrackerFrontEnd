import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from '@firebase/auth';
import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../services/firebase';

//
//
//

export type Session = any;
export type ExtraUserData = any;
export type LoginResponse = { sucess: true } | { sucess: false, idToken?: string };
export interface AuthContextInterface {
    currentUser: Session | null,

    loginWithIdToken: (idToken: string) => Promise<LoginResponse>,
    registerWithIdToken: (idToken: string, data: ExtraUserData) => Promise<LoginResponse>,

    loginWitGoogle: () => Promise<LoginResponse>,
    loginWitEmailAndPassword: (email: string, password: string) => Promise<LoginResponse>,

    signOut: () => Promise<void>,
}

//
//
//

const AuthContext = createContext<AuthContextInterface>({
  currentUser: null,

  loginWithIdToken: async (idToken) => ({ sucess: false }),
  registerWithIdToken: async (idToken, data) => ({ sucess: false }),

  loginWitGoogle: async () => ({ sucess: false }),
  loginWitEmailAndPassword: async (email, password) => ({ sucess: false }),

  signOut: async ()=>{},
});

export function useAuth() {
  return useContext(AuthContext);
}

//
//
//


const apiLogin = async (idToken: string, extraData?: object) => {
  return axios.post<Session>('/api/login', { idToken, extraData });
};

const apiLogout = async () => {
  return axios.post('/api/logout', {});
};

//
//
//

export function AuthContextProvider({ children }: React.PropsWithChildren<{}>) {
  const [ currentUser, setCurrentUser ] = useState<Session | null>(null);
  const [ initialized, setInitialized ] = useState(false);

  // Inital data
  useEffect(() => {
    axios.get<Session>('/api/session')
        .then(async (req)=> setCurrentUser(req.data))
        .catch((ignore)=> {})
        .finally(() => setInitialized(true));
  }, []);

  // Exports
  const loginWithIdToken = async (idToken: string, data?: ExtraUserData) => {
    const [ user, error ] = await apiLogin(idToken, data)
        .then<[Session, null]>((val)=> [ val.data, null ])
        .catch<[null, any]>((val)=> [ null, val ]);
    if (error) {
      if (error.response.data.missing_register) {
        return { sucess: false, idToken } as LoginResponse;
      }

      return { sucess: false } as LoginResponse;
    }

    setCurrentUser(user!);
    return { sucess: true } as LoginResponse;
  };

  const value: AuthContextInterface = {
    currentUser,

    loginWithIdToken,
    registerWithIdToken: loginWithIdToken as any,

    loginWitEmailAndPassword: async (email: string, password: string) => {
      return signInWithEmailAndPassword(auth, email, password)
          .then(async (result) => {
            const idToken = await result.user.getIdToken();
            return loginWithIdToken(idToken);
          })
          .catch((error) => {
            console.log(error);
            return { sucess: false } as LoginResponse;
          })
          .finally(() => auth.signOut());
    },
    loginWitGoogle: async ()=> {
      const provider = new GoogleAuthProvider();

      return signInWithPopup(auth, provider)
          .then(async (result) => {
            const idToken = await result.user.getIdToken();
            return loginWithIdToken(idToken);
          })
          .catch((error) => {
            console.log(error);
            return { sucess: false } as LoginResponse;
          })
          .finally(() => auth.signOut());
    },

    signOut: async () => {
      await apiLogout().then(() => setCurrentUser(null)).catch((ignore) => {});
    },
  };

  return (
    <AuthContext.Provider value={value}>
      { initialized && children }
      { !initialized && <span>Loading...</span> }
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;

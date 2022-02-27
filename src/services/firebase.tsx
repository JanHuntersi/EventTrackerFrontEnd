import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const app = initializeApp({
  apiKey: 'AIzaSyCDWWJwRzNI1oyV7enkHxqYr2lFAtNM1FQ',
  authDomain: 'rpo-dev-607c1.firebaseapp.com',
  projectId: 'rpo-dev-607c1',
  storageBucket: 'rpo-dev-607c1.appspot.com',
  messagingSenderId: '438657835077',
  appId: '1:438657835077:web:7f11d9879e55f6246f832c',
  measurementId: 'G-PBC521RERB',
});

export const auth = getAuth(app);
export default app;

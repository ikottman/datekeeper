import firebase from 'firebase/app';
import 'firebase/auth';
import { user } from '../store';

export function initAuth() {
  const auth = firebase.auth();

  const loginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return auth.signInWithPopup(provider);
  };

  const logout = () => auth.signOut();

  // manage user state with a svelte store
  auth.onAuthStateChanged(async fireUser => {
    if (fireUser) {
      const token = await fireUser.getIdTokenResult();
      user.set({
        id: token.claims.user_id,
        name: token.claims.name,
        email: token.claims.email
      });
    } else {
      user.set(null);
    }
  });

  return {
    loginWithGoogle,
    logout
  };
};

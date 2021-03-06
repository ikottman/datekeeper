import firebase from 'firebase/app';
import 'firebase/auth';
import { readable } from 'svelte/store';
import type { User } from '../schema';

function userMapper(claims): User {
  return {
    id: claims.user_id,
    name: claims.name,
    email: claims.email
  };
}

export function initAuth() {
  const auth = firebase.auth();

  const loginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return auth.signInWithPopup(provider);
  };

  const logout = () => auth.signOut();

  // wrap Firebase user in a Svelte readable store
  const user = readable(null, set => {
    const unsub = auth.onAuthStateChanged(async fireUser => {
      if (fireUser) {
        const token = await fireUser.getIdTokenResult();
        const user = userMapper(token.claims);
        set(user);
      } else {
        set(null);
      }
    });

    return unsub;
  });

  return {
    user,
    loginWithGoogle,
    logout
  };
};

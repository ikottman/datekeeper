import firebase from 'firebase/app';
import 'firebase/auth';
import { readable } from 'svelte/store';

const userMapper = claims => ({
  id: claims.user_id,
  name: claims.name,
  email: claims.email,
  picture: claims.picture
});

// TODO: remove useRedirect and just use one
export const initAuth = (useRedirect = false) => {
  const auth = firebase.auth();

  const loginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    if (useRedirect) {
      return auth.signInWithRedirect(provider);
    } else {
      return auth.signInWithPopup(provider);
    }
  };

  // TODO: I should probably blank the user store on logout
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

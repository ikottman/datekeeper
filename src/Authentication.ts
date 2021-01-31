import { Auth0Client } from '@auth0/auth0-spa-js';
import { user, authenticated } from './store.js';
import { auth } from './auth'

const auth0 = new Auth0Client({
  domain: auth.domain,
  client_id: auth.client_id,
  audience: auth.audience,
  scope: auth.scope,
  cacheLocation: 'localstorage',
  useRefreshTokens: true
});

async function refreshAuthenticated() {
  const currentlyAuthenticated = await auth0.isAuthenticated();
  authenticated.update(_ => currentlyAuthenticated);
  return authenticated;
}

async function refreshUser() {
  const currentUser = await auth0.getUser();
  user.update(_ => currentUser)
}

async function logout() {
  await auth0.logout({
    returnTo: window.location.origin
  });
};

export async function login() {
  try {
    await auth0.loginWithPopup();
    await refreshUser();
    await refreshAuthenticated();
  } catch (e) {
    console.error(e);
  }
}

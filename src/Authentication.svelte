<script lang="ts" context="module">
  import { Auth0Client } from '@auth0/auth0-spa-js';
  import { getContext } from 'svelte';
  import { user, authenticated, token } from './store.js';
  import { auth } from './auth'

  const auth0 = new Auth0Client({
    domain: auth.domain,
    client_id: auth.client_id,
    audience: auth.audience,
    scope: auth.scope,
    cacheLocation: 'localstorage',
    useRefreshTokens: true
  });

  export async function isAuthenticated() {
    const currently_authenticated = await auth0.isAuthenticated();
    authenticated.update(authentication => currently_authenticated);
    return authenticated;
  }

  export function loginClick() {
    login();
  }

  export function logoutClick() {
    console.log('logout');
    logout();
  }

  async function handleRedirectCallback() {
      await auth0.handleRedirectCallback();
      window.history.replaceState({}, document.title, "/");
      await isAuthenticated();
      if (authenticated) {
        getCurrentUser();
        getCurrentToken();
      }
  }

  const query = window.location.search;
  if (query.includes("code=") && query.includes("state=")) {
    handleRedirectCallback();
  }

  async function login() {
    const login = await auth0.loginWithRedirect({
      redirect_uri: window.location.origin
    });
  }

  async function logout() {
    const logout = await auth0.logout({
      returnTo: window.location.origin
    });
  };

  export async function getCurrentUser() {
    const current_user = await auth0.getUser();
    user.update(user => current_user)
  }

  export async function getCurrentToken() {
    const current_token = await auth0.getTokenSilently();;
    token.update(token => current_token)
  }
  </script>

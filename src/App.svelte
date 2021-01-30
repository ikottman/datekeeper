<script lang="ts">
  import { authenticated } from './store.js';
  import Events from "./Events.svelte";
  import { isAuthenticated, getCurrentUser, getCurrentToken } from "./Authentication.svelte";
  import Tailwind from "./Tailwind.svelte";
  import Login from "./Login.svelte";

  isAuthenticated();
  if (authenticated) {
      getCurrentUser();
      getCurrentToken();
  }
</script>

<Tailwind />


{#await $authenticated}
{:then authentication_result}
{#if authentication_result}
  <Events />
{:else}
  <Login />
{/if}
{/await}

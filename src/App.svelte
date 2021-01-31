<script lang="ts">
  import { authenticated } from './store.js';
  import Events from "./Events.svelte";
  import Tailwind from "./Tailwind.svelte";
  import Login from "./Login.svelte";
</script>

<Tailwind />


{#await $authenticated}
  {:then isAuthenticated}
  {#if isAuthenticated}
    <Events />
  {:else}
    <Login />
  {/if}
{/await}

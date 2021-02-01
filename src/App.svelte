<script lang="ts">
  import { user } from './store.js';
  import TimelineArea from './TimelineArea.svelte';
  import Tailwind from "./Tailwind.svelte";
  import Login from "./Login.svelte";

</script>

<Tailwind />


{#await $user}
Loading...
  {:then user}
  {#if user}
    <TimelineArea />
  {:else}
    <Login />
  {/if}
{/await}

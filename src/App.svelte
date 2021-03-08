<script lang="ts">
  import { user } from './store';
  import firebase from 'firebase/app';
  import { firebaseConfig } from './firebase/firebaseConfig';
  import TimelineArea from './TimelineArea.svelte';
  import Tailwind from "./Tailwind.svelte";
  import Login from "./Login.svelte";

  firebase.initializeApp(firebaseConfig);
</script>

<Tailwind />

{#if $user}
  <div class="grid grid-cols-6 m-4">
    <div class="col-start-3 col-end-5">
      <TimelineArea />
    </div>
  </div>
{:else}
  <Login />
{/if}
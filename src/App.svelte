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

<div class="grid grid-cols-1 sm:grid-cols-3 m-6">
  {#if $user}
    <div class="col-start-1 sm:col-start-2 max-w-lg justify-self-stretch">
      <TimelineArea />
    </div>
    {:else}
      <div class="col-start-1 sm:col-start-2 justify-self-center">
        <Login />
      </div>
    {/if}
</div>

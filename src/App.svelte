<script lang="ts">
  import firebase from 'firebase/app';
  import { initAuth } from './firebase/auth';
  import { firebaseConfig } from './firebase/firebaseConfig';
  import TimelineArea from './TimelineArea.svelte';
  import Tailwind from "./Tailwind.svelte";
import { createUser } from './firebase/api';
import type { User } from './schema';

  firebase.initializeApp(firebaseConfig);

  const { loginWithGoogle, user } = initAuth();
  user.subscribe((user: User) => {
    if (user) {
      createUser(user.id);
    }
  })
</script>

<Tailwind />

<div class="wrapper">
  {#if $user}
    <TimelineArea user={$user}/>
  {:else}
    <div class="w-full max-w-xs">
      <div class="mt-3">
        <button type="button" on:click|preventDefault={loginWithGoogle}>
          Sign In with Google
        </button>
      </div>
    </div>
  {/if}
</div>
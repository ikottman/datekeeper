<script lang="ts">
  import { initAuth } from './firebase/auth';

  const { loginWithGoogle } = initAuth();
</script>

<div class="w-full max-w-xs">
  <div class="mt-3">
    <button type="button" on:click|preventDefault={loginWithGoogle}>
      Sign In with Google
    </button>
  </div>
</div>
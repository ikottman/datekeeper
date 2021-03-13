<script lang="ts">
  import { initAuth } from './firebase/auth';
  import Button from './components/Button.svelte';

  const { loginWithGoogle } = initAuth();
</script>

<Button onClick={loginWithGoogle}>
  Sign In with Google
</Button>
<script lang="ts">
  import { addTimeline } from './firebase/api.js';
  import { user } from './store';

  let name;
  function createTimeline() {
    addTimeline($user.id, name);
  }
</script>

<input bind:value={name} placeholder="Timeline Name">
<button class="" on:click={createTimeline}>Create Timeline</button>
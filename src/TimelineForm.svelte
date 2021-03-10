<script lang="ts">
  import { addTimeline } from './firebase/api.js';
  import { user } from './store';

  let name;
  function createTimeline() {
    addTimeline($user.id, name);
  }
</script>

<style>
  input {
    padding: 5px;
  }

  button {
    color: #fdfffc;
    border-color: #fdfffc;
    border-width: 3px;
    padding: 7px;
  }

  button:hover {
    border-width: 5px;
    padding: 5px;
  }
</style>

<div class="flex justify-center">
  <input class="mt-2"bind:value={name} placeholder="Your Timeline Here">
</div>

<div class="flex justify-center">
  <button class="my-2" on:click={createTimeline}>Add Timeline</button>
</div>
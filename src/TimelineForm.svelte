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
    display: block;
    padding: 5px;
  }

  button {
    color: #5bb7d7;
    border-color: #5bb7d7;
    border-width: 3px;
    padding: 7px;
  }

  button:hover {
    padding: 5px;
    border-width: 5px;
  }
</style>

<input class="my-2"bind:value={name} placeholder="Your Timeline Here">
<button class="" on:click={createTimeline}>Add Timeline</button>
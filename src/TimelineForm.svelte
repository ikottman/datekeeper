<script lang="ts">
  import { addTimeline } from './firebase/api.js';
  import { user } from './store';

  let name;
  function createTimeline() {
    addTimeline($user.id, name);
  }
</script>

<style>
  button {
    border-width: 3px;
    padding: 7px;
  }

  button:hover {
    border-width: 5px;
    padding: 5px;
  }
</style>

<div class="border-4 border-gray-100 p-2 mb-2">
  <label class="block text-gray-100 text-xs font-bold mb-2">TIMELINE NAME</label>
  <div class="relative flex w-full flex-wrap items-stretch mb-3">
    <input type="text" bind:value={name} placeholder="Birthdays" class="text-sm outline-none focus:outline-none focus:shadow-outline w-full pl-1"/>
  </div>

  <div class="flex justify-center">
    <button class="text-gray-100 border-gray-100 mb-2" on:click={createTimeline}>Add Timeline</button>
  </div>
</div>
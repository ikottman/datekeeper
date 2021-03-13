<script lang="ts">
  import { addTimeline } from './firebase/api.js';
  import { user } from './store';
  import Button from './components/Button.svelte';

  let name;
  function createTimeline() {
    addTimeline($user.id, name);
  }
</script>


<div class="border-4 border-gray-100 p-2 mb-2">
  <label class="block text-gray-100 text-xs font-bold mb-2">TIMELINE NAME</label>
  <div class="relative flex w-full flex-wrap items-stretch mb-3">
    <input type="text" bind:value={name} placeholder="Birthdays" class="text-sm outline-none focus:outline-none focus:shadow-outline w-full pl-1"/>
  </div>

  <div class="flex justify-center">
    <Button onClick={createTimeline}>
      Add Timeline
    </Button>
  </div>
</div>
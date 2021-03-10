<script lang="ts">
  import type { Doc } from 'typesaurus'
  import type { Timeline } from "./schema";
  import { updateTimeline } from './firebase/api.js';
  import { user } from './store';
  export let timeline: Doc<Timeline>;

  let name;
  let date;
  function addEvent() {
    const event = {
      name: name,
      date: date
    };
    timeline.data.events.push(event);
    updateTimeline($user.id, timeline);
    name = undefined;
    date = undefined;
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
  <label class="block text-gray-100 text-xs font-bold mb-2">EVENT NAME</label>
  <div class="relative flex w-full flex-wrap items-stretch mb-3">
    <input type="text" bind:value={name} placeholder="Most Boring Day in History" class="text-sm outline-none focus:outline-none focus:shadow-outline w-full pl-1"/>
  </div>

  <label class="block text-gray-100 text-xs font-bold mb-2">EVENT DATE</label>
  <div class="relative flex w-full flex-wrap items-stretch mb-3">
    <input type="text" bind:value={date} placeholder="1954-04-11" class="text-sm outline-none focus:outline-none focus:shadow-outline w-full pl-1"/>
  </div>

  <div class="flex justify-center">
    <button class="text-gray-100 border-gray-100 mb-2" on:click={addEvent}>Add Event</button>
  </div>
</div>

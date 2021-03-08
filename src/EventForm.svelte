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
  input {
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

<div class="flex justify-center">
  <input class="mt-2" bind:value={name} placeholder="Your Event Here">
</div>

<div class="flex justify-center">
  <input class="my-2" bind:value={date} placeholder="1954-04-11">
</div>

<div class="flex justify-center">
  <button class="mb-2" on:click={addEvent}>Add Event</button>
</div>
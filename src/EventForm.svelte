<script lang="ts">
  import type { Doc } from 'typesaurus'
  import type { Timeline } from "./schema";
  import { updateTimeline } from './firebase/api.js';
  export let timeline: Doc<Timeline>;
  let name;
  let date;
  function addEvent() {
    const event = {
      event: name,
      date: date
    };
    timeline.data.events.push(event);
    updateTimeline(timeline);
  }
</script>

<input bind:value={name} placeholder="Your event here">
<input bind:value={date} placeholder="1954-04-11">
<button class="" on:click={addEvent}>Save</button>
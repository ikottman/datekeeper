<script lang="ts">
  import type { Doc } from 'typesaurus'
  import type { Timeline } from "./schema";
  import { updateTimeline } from './firebase/api.js';
  import type { User } from "./schema";
  export let timeline: Doc<Timeline>;
  export let user: User;

  let name;
  let date;
  function addEvent() {
    const event = {
      name: name,
      date: date
    };
    timeline.data.events.push(event);
    updateTimeline(user.id, timeline);
  }
</script>

<input bind:value={name} placeholder="Your event here">
<input bind:value={date} placeholder="1954-04-11">
<button class="" on:click={addEvent}>Save</button>
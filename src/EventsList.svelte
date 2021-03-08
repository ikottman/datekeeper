<script lang="ts">
  import type { Doc } from 'typesaurus';
  import type { Timeline } from './schema';
  import Event from "./Event.svelte";
  import EventForm from "./EventForm.svelte";
  export let timeline: Doc<Timeline>;
  timeline.data.events.sort((a, b) => a.date.localeCompare(b.date))
</script>

<div class="grid grid-cols-3 gap-4 m-4">
  <div class="col-start-2">
    <EventForm timeline={timeline}/>
  </div>
  {#each timeline.data.events as { name, date }}
    <div class="col-start-2">
      <Event name={name} date={date} />
    </div>
  {/each}
</div>
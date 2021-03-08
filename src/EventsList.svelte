<script lang="ts">
  import type { Doc } from 'typesaurus';
  import type { Timeline } from './schema';
  import Event from "./Event.svelte";
  import EventForm from "./EventForm.svelte";
  export let timeline: Doc<Timeline>;
  timeline.data.events.sort((a, b) => a.date.localeCompare(b.date))
</script>

<br/>
<br/>
<EventForm timeline={timeline}/>
<br/>
<br/>
{#each timeline.data.events as { name, date }}
  <div class="col-start-2">
    <Event name={name} date={date} />
  </div>
  <br/>
{/each}
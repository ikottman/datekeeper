<script lang="ts">
  import { user } from './store';
  import EventsList from "./EventsList.svelte";
  import SelectTimeline from './SelectTimeline.svelte';
  import { getTimelines } from './firebase/api.js';
  import TimelineForm from "./TimelineForm.svelte";

  const timelinePromise = getTimelines($user.id);
  let selectedTimeline;
</script>

{#await timelinePromise then timelines}
  <SelectTimeline options={timelines.map(t => t.data.name)} bind:selected={selectedTimeline}/>
  <TimelineForm />
  {#if selectedTimeline}
    <EventsList timeline={timelines.find(t => t.data.name === selectedTimeline)}/>
  {/if}
{:catch error}
  <TimelineForm />
  <!-- <p style="color: red">Failed to retrieve timelines</p> -->
{/await}

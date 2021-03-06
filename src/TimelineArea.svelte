<script lang="ts">
  import EventsList from "./EventsList.svelte";
  import SelectTimeline from './SelectTimeline.svelte';
  import { getTimelines } from './firebase/api.js';
  import type { User } from "./schema";
  import TimelineForm from "./TimelineForm.svelte";

  export let user: User;
  const timelinePromise = getTimelines(user.id);
  let selectedTimeline;
</script>


{#await timelinePromise then timelines}
  <SelectTimeline options={timelines.map(t => t.data.name)} bind:selected={selectedTimeline}/>
  <TimelineForm user={user}/>
  {#if selectedTimeline}
    <EventsList timeline={timelines.find(t => t.data.name === selectedTimeline)}/>
  {/if}
{:catch error}
  <TimelineForm user={user}/>
  <!-- <p style="color: red">Failed to retrieve timelines</p> -->
{/await}

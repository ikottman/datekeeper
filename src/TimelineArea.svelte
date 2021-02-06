<script lang="ts">
  import Events from "./Events.svelte";
  import SelectTimeline from './SelectTimeline.svelte';
  import { getTimelines } from './api.js';

  const timelinePromise = getTimelines();

  let selectedTimeline;
</script>

{#await timelinePromise then timelines}
  <SelectTimeline options={timelines.map(t => t.name)} bind:selected={selectedTimeline}/>
  {#if selectedTimeline}
    <Events events={timelines.find(t => t.name === selectedTimeline).events}/>
  {/if}
{/await}

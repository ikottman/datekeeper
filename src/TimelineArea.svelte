<script lang="ts">
  import Events from "./Events.svelte";
  import SelectTimeline from './SelectTimeline.svelte';
  import { getTimelines } from './api.js';
  import { user } from './store';

  const binUrl = $user['https://ikottman.com/binUrl'];
  const binSecret = $user['https://ikottman.com/binSecret'];
  const timelinePromise = getTimelines(binUrl, binSecret);

  let selectedTimeline;
</script>

{#await timelinePromise then timelines}
  <SelectTimeline options={timelines.map(t => t.name)} bind:selected={selectedTimeline}/>
  {#if selectedTimeline}
    <Events events={timelines.find(t => t.name === selectedTimeline).events}/>
  {/if}
{/await}

<script lang="ts">
  import Events from "./Events.svelte";
  import SelectTimeline from './SelectTimeline.svelte';
  import { getTimelines } from './firebase/api.js';
  import type { User } from "./schema";

  export let user: User;
  const timelinePromise = getTimelines(user.id);
  let selectedTimeline;
</script>

{#await timelinePromise then timelines}
  <SelectTimeline options={timelines.map(t => t.name)} bind:selected={selectedTimeline}/>
  {#if selectedTimeline}
    <Events events={timelines.find(t => t.name === selectedTimeline).events}/>
  {/if}
{:catch error}
  <p style="color: red">Failed to retrieve timelines</p>
{/await}

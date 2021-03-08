<script lang="ts">
  import { timelines } from './store';
  import EventsList from "./EventsList.svelte";
  import SelectTimeline from './SelectTimeline.svelte';
  import TimelineForm from "./TimelineForm.svelte";

  let selectedTimeline;
</script>

{#if $timelines}
  <SelectTimeline timelines={$timelines} bind:selected={selectedTimeline}/>
  <TimelineForm />
  {#if selectedTimeline}
    <EventsList timeline={selectedTimeline}/>
  {/if}
{:else}
  <TimelineForm />
{/if}

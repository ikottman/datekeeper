<script lang="ts">
  import { timelines, selectedTimeline } from './store';
  import EventForm from "./EventForm.svelte";
  import EventsList from "./EventsList.svelte";
  import SelectTimeline from './SelectTimeline.svelte';
  import TimelineForm from "./TimelineForm.svelte";
</script>

{#if $timelines?.length > 0}
  <TimelineForm />
  {#if $selectedTimeline}
    <EventForm timeline={$selectedTimeline}/>
    <SelectTimeline/>
    <EventsList/>
  {/if}
{:else}
  <TimelineForm />
{/if}

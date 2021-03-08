<script lang="ts">
  import { timelines, selectedTimeline } from './store';
  import EventsList from "./EventsList.svelte";
  import SelectTimeline from './SelectTimeline.svelte';
  import TimelineForm from "./TimelineForm.svelte";
</script>

{#if $timelines?.length > 0}
  <SelectTimeline timelines={$timelines} />
  <TimelineForm />
  {#if $selectedTimeline}
    <EventsList timeline={$selectedTimeline}/>
  {/if}
{:else}
  <TimelineForm />
{/if}

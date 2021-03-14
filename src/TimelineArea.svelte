<script lang="ts">
  import { timelines, selectedTimeline } from './store';
  import EventForm from "./EventForm.svelte";
  import EventsList from "./EventsList.svelte";
  import TimelineForm from "./TimelineForm.svelte";
</script>

<div class="grid gap-3">
  {#if $selectedTimeline}
    <EventsList/>
    <EventForm timeline={$selectedTimeline}/>
  {/if}
  <TimelineForm />
</div>

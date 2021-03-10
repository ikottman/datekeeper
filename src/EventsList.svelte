<script lang="ts">
  import Event from "./Event.svelte";
  import { events } from "./store";

  $:sortedEvents = $events.sort((a, b) => a.date.localeCompare(b.date))
</script>
{#each sortedEvents as { name, date }}
  <div class="col-start-2 mb-4">
    <Event name={name} date={date} />
  </div>
{/each}
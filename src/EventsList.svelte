<script lang="ts">
  import Event from "./Event.svelte";
  import { events } from "./store";

  $events.sort((a, b) => a.date.localeCompare(b.date))
</script>
{#each $events as { name, date }}
  <div class="col-start-2 mb-4">
    <Event name={name} date={date} />
  </div>
{/each}
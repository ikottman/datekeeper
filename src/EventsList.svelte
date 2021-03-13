<script lang="ts">
  import Event from "./Event.svelte";
  import SelectTimeline from "./SelectTimeline.svelte";
  import { events } from "./store";

  $:sortedEvents = $events.sort((a, b) => a.date.localeCompare(b.date))
</script>

<div>
  <SelectTimeline/>
  {#each sortedEvents as { name, date }}
    <div class="col-start-2 my-2">
      <Event name={name} date={date} />
    </div>
  {/each}
</div>
<script lang="ts">
  import Event from "./Event.svelte";
  import { getEvents } from "./api";
  const events = getEvents();
</script>

<div class="grid grid-cols-3 gap-4 m-4">
  {#await events}
    <div>
      Fetching events
    </div>
  {:then event}
    {#each event as {event, date}}
      <div class="col-start-2">
        <Event event={event} date={date} />
      </div>
    {/each}
  {/await}
</div>
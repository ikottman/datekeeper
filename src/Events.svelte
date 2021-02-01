<script lang="ts">
  import Event from "./Event.svelte";
  import type { Event as EventType } from './schema';

  export let events: EventType[];
</script>

<div class="grid grid-cols-3 gap-4 m-4">
  {#each events as { event, date }}
    <div class="col-start-2">
      <Event event={event} date={date} />
    </div>
  {/each}
</div>
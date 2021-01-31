<script lang="ts">
  import Event from "./Event.svelte";
  import { getEvents } from "./api";
import { user } from "./store";
  const binUrl = $user['https://ikottman.com/binUrl'];
  const binSecret = $user['https://ikottman.com/binSecret'];
  const events = getEvents(binUrl, binSecret).then(data => data.events);
</script>

<div class="grid grid-cols-3 gap-4 m-4">
  {#await events}
    <div>
      Fetching events
    </div>
  {:then events}
    {#each events as {event, date}}
      <div class="col-start-2">
        <Event event={event} date={date} />
      </div>
    {/each}
  {/await}
</div>
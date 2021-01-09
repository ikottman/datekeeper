<script lang="ts">
  import { getEvents } from "./api";
  const events = getEvents();
</script>


{#await events}
<div class="flex justify-center m-3">
  Fetching events
</div>
{:then event}
  {#each event as {event, date}}
    <div>{event}: {date}</div>
  {/each}
{/await}
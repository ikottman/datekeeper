<script lang="ts">
  import { updateTimeline } from './firebase/api.js';
  import { selectedTimeline, user } from './store';
  export let name: string;
  export let date: string;

  function deleteEvent() {
    $selectedTimeline.data.events = $selectedTimeline.data.events.filter(e => e.name !== name && e.date !== date);
    updateTimeline($user.id, $selectedTimeline);
  }
</script>
<div class="delete justify-self-center select-none cursor-pointer" on:click={deleteEvent}>🗑</div>
<script lang="ts">
  import { selectedTimeline, timelines } from './store';
  let selected = $selectedTimeline;
  $: selectedTimeline.set(selected);
</script>

<div class="flex justify-center my-2">
  <select bind:value={selected}>
    {#each $timelines as timeline}
      <option value={timeline}>
        {timeline.data.name}
      </option>
    {/each}
  </select>
</div>
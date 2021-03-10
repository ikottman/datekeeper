<script lang="ts">
  import { selectedTimeline, timelines } from './store';
  let selected = $selectedTimeline;
  $: selectedTimeline.set(selected);
</script>

<label class="block text-gray-100 text-xs font-bold mb-2">TIMELINE</label>
<div class="flex justify-center my-2">
  <select class="mt-1 block w-full" bind:value={selected}>
    {#each $timelines as timeline}
      <option value={timeline}>
        {timeline.data.name}
      </option>
    {/each}
  </select>
</div>
<script lang="ts">
  import { selectedTimeline, timelines } from './store';
  import Label from "./components/Label.svelte";

  let selected = $selectedTimeline;
  $: selectedTimeline.set(selected);
</script>

<div>
  <Label>timeline</Label>
  <select class="w-full" bind:value={selected}>
    {#each $timelines as timeline}
      <option value={timeline}>
        {timeline.data.name}
      </option>
    {/each}
  </select>
</div>
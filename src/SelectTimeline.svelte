<script lang="ts">
  import type { Timeline } from './schema';
  import type { Doc } from 'typesaurus';
  import { selectedTimeline } from './store';
  export let timelines: Doc<Timeline>[];
  let selected;
  $: selectedTimeline.set(selected);
</script>

<select bind:value={selected}>
  {#each timelines as timeline}
    <option value={timeline}>
      {timeline.data.name}
    </option>
  {/each}
</select>
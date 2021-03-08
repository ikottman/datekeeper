<script lang="ts">
  import type { Timeline } from './schema';
  import type { Doc } from 'typesaurus';
  export let timelines: Doc<Timeline>[];
  export let selected;
</script>

<select bind:value={selected}>
  {#each timelines as timeline}
    <option value={timeline}>
      {timeline.data.name}
    </option>
  {/each}
</select>
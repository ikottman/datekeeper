<script>
  export let options;
  console.log('options', JSON.stringify(options, null, 2))
  export let selected;
</script>

<style>
</style>

<select bind:value={selected}>
  {#each options as option}
    <option value={option}>
      {option}
    </option>
  {/each}
</select>
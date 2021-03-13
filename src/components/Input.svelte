<script lang="ts">
  import Label from "./Label.svelte";
  export let placeholder;
  export let value;
  export let label;
</script>

<div>
  <Label>{label}</Label>
  <input type="text" class="text-sm outline-none focus:outline-none focus:shadow-outline w-full pl-1" bind:value placeholder={placeholder}/>
</div>

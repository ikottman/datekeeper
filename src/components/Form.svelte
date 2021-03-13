<script lang="ts">
  export let title;
</script>

<div class="border-4 border-gray-100 p-2 grid gap-2">
  {#if title}
  <div class="justify-self-center">
    <h1 class="text-gray-100 text-lg font-bold uppercase">{title}</h1>
  </div>
  {/if}
  <slot name="input1" />
  <slot name="input2" />
  <div class="justify-self-center">
    <slot name="submit" />
  </div>
</div>
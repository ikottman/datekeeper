<script lang="ts">
  export let onClick: () => any;
</script>

<style>
  button {
    border-width: 3px;
    padding: 7px;
  }

  button:hover {
    border-width: 5px;
    padding: 5px;
  }
</style>

<button class="text-gray-100 border-gray-100 mb-2" on:click={onClick}><slot/></button>

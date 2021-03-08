<script lang="ts">
  import dayjs from 'dayjs';
  import Counts from './Counts.svelte';

  export let name;
  export let date;
  $: date = dayjs(date);
  $: dateDisplay = date.format("MMMM D, YYYY")
</script>

<div class="p-4 bg-gray-100">
  <h3 class="flex justify-center text-2xl font-bold">{name}</h3>
  <div class="flex justify-center">{dateDisplay}</div>
  <Counts date={date} />
</div>

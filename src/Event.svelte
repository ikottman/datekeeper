<script lang="ts">
  import dayjs from 'dayjs';
  import Counts from './Counts.svelte';
  import Delete from './Delete.svelte';

  export let name;
  export let date;
  $: date = dayjs(date);
  $: dateDisplay = date.format("MMMM D, YYYY")
</script>

<div class="p-2 bg-gray-200 grid grid-cols-event-card">
  <div></div>
  <div class="grid justify-items-center">
    <h3 class="text-2xl font-bold">{name}</h3>
    <div class="">{dateDisplay}</div>
    <div class="">
      <Counts date={date} />
    </div>
  </div>
  <Delete name={name} date={date}/>
</div>

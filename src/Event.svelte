<script lang="ts">
  import dayjs from 'dayjs';
  export let event;
  export let date;
  date = dayjs(date);
  const dateDisplay = date.format("MMMM D, YYYY")
</script>

<div class="shadow-md p-4">
  <h3 class="flex justify-center text-2xl font-bold">{event}</h3>
  <div class="flex justify-center">{dateDisplay}</div>
  <div class="grid grid-cols-3 gap-x-4 justify-center">
    <div class="flex justify-center font-bold">Years</div>
    <div class="flex justify-center font-bold">Months</div>
    <div class="flex justify-center font-bold">Days</div>
    <div class="flex justify-center">10</div>
    <div class="flex justify-center">12</div>
    <div class="flex justify-center">13</div>
  </div>
</div>

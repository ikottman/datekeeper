<script lang="ts">
  import dayjs from 'dayjs';

  export let date;

  const today = dayjs();
  $: years = Math.abs(date.diff(today, 'year'));
  $: months = Math.abs(date.diff(today, 'month')) - (years * 12);
</script>

<div class="grid grid-cols-2 justify-items-center">
  <div class="font-bold border-r-4">Years</div>
  <div class="font-bold">Months</div>
  <div class="border-r-4">{years}</div>
  <div class="">{months}</div>
</div>

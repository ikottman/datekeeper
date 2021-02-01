<script lang="ts">
  import dayjs from 'dayjs';

  export let date;

  const today = dayjs();
  const years = Math.abs(date.diff(today, 'year'));
  const months = Math.abs(date.diff(today, 'month')) - (years * 12);
</script>

<div class="grid grid-cols-2">
  <div class="flex justify-center font-bold border-r-4">Years</div>
  <div class="flex justify-center font-bold">Months</div>
  <div class="flex justify-center border-r-4">{years}</div>
  <div class="flex justify-center">{months}</div>
</div>

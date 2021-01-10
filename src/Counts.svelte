<script lang="ts">
  import dayjs from 'dayjs';

  export let date;

  const today = dayjs();
  const years = Math.abs(date.diff(today, 'year'));
  const months = today.month() + 1;
  const days = today.date();
</script>

<div class="grid grid-cols-3">
  <div class="flex justify-center font-bold border-r-4">Years</div>
  <div class="flex justify-center font-bold border-r-4">Months</div>
  <div class="flex justify-center font-bold">Days</div>
  <div class="flex justify-center border-r-4">{years}</div>
  <div class="flex justify-center border-r-4">{months}</div>
  <div class="flex justify-center">{days}</div>
</div>

<script lang="ts">
  import type { Doc } from 'typesaurus'
  import type { Timeline } from "./schema";
  import { updateTimeline } from './firebase/api.js';
  import { user } from './store';
  import Button from './components/Button.svelte';
  import Input from './components/Input.svelte';
  import Form from "./components/Form.svelte"
  export let timeline: Doc<Timeline>;

  let name;
  let date;
  function addEvent() {
    const event = {
      name: name,
      date: date
    };
    timeline.data.events.push(event);
    updateTimeline($user.id, timeline);
    name = undefined;
    date = undefined;
  }
</script>

<Form title="event">
  <Input slot="input1" label="name" placeholder="Most Boring Day in History" bind:value={name} />
  <Input slot="input2" label="date" placeholder="1954-04-11" bind:value={date} />
  <Button slot="submit" onClick={addEvent}>
    Add Event
  </Button>
</Form>

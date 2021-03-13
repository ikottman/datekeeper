<script lang="ts">
  import { addTimeline } from './firebase/api.js';
  import { user } from './store';
  import Button from './components/Button.svelte';
  import Input from './components/Input.svelte';
  import Form from './components/Form.svelte';

  let name;
  function createTimeline() {
    addTimeline($user.id, name);
  }
</script>

<Form title="timeline">
  <Input slot="input1" label="name" placeholder="Birthdays" bind:value={name}/>
  <Button slot="submit" onClick={createTimeline}>Add</Button>
</Form>
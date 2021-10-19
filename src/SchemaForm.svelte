<script>
  import {flip} from "svelte/animate";
  import {dndzone} from "svelte-dnd-action";

  import {
    name,
    description,
    activeOptions,
    estimatedCostNumber,
    estimatedCostUnit,
    prepTime,
    performTime,
    totalTime,
    tools,
    supplies,
    sections,
    steps,
  } from './data'

  import StepGroup from './StepGroup.svelte';

  const flipDurationMs = 300;

  function handleDndConsider(e) {
    $steps = e.detail.items;
  }

  function handleDndFinalize(e) {
    $steps = e.detail.items;
  }

</script>

<form>
  <label>
    Name:
    <input
      bind:value={$name}
      type="text"
      name="name"
    >
  </label>
  <label>
    Description:
    <textarea
      bind:value={$description}
      type="text"
      name="description"
    />
  </label>
  <label>
    Prep Time:
    <input
      bind:value={$prepTime}
      type="text"
      name="preptime"
    >
  </label>
  <label>
    Perform Time:
    <input
      bind:value={$performTime}
      type="text"
      name="performTime"
    >
  </label>
  <label>
    Total Time:
    <input
      bind:value={$totalTime}
      type="text"
      name="totalTime"
    >
  </label>

  <p>
    Steps:
  </p>

  <div
    use:dndzone="{{items: $steps, flipDurationMs}}"
    on:consider="{handleDndConsider}"
    on:finalize="{handleDndFinalize}"
  >
    {#each $steps as step(step.id)}
      <div
        class="draggable"
        animate:flip="{{duration: flipDurationMs}}"
      >
        <StepGroup {step} />
      </div>
    {/each}
  </div>

</form>

<style>
  p,
  label {
    display: block;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  textarea,
  input {
    display: block;
    width: 100%;
    margin-top: 0.5rem;
    border: 1px solid var(--dark-gray);
    border-radius: 3px;
  }

  textarea {
    resize: vertical;
  }
  .draggable {
    cursor: grab;
  }
  .draggable:active {
    cursor: grabbing;
  }
</style>
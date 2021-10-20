<script>
  import {flip} from "svelte/animate";
  import {dndzone} from "svelte-dnd-action";
  import {
    steps,
  } from './data.js'

  import StepGroup from './StepGroup.svelte';

  export let sectionSteps

  let array = sectionSteps ? sectionSteps : $steps;

  const flipDurationMs = 300;

  function handleDndConsider(e) {
    array = e.detail.items;
  }

  function handleDndFinalize(e) {
    array = e.detail.items;
    sectionSteps
      ? sectionSteps = array
      : $steps = array
  }

  $: {
    sectionSteps
      ? sectionSteps = array
      : $steps = array
  }
</script>

<div
  use:dndzone="{{
    items: array,
    flipDurationMs,
    dropFromOthersDisabled: true
  }}"
  on:consider="{handleDndConsider}"
  on:finalize="{handleDndFinalize}"
>
  {#each array as step(step.id)}
    <div
      class="draggable"
      animate:flip="{{duration: flipDurationMs}}"
    >
      <StepGroup bind:step={step} />
    </div>
  {/each}
</div>

<style>
  .draggable {
    cursor: grab;
  }
  .draggable:active {
    cursor: grabbing;
  }
</style>
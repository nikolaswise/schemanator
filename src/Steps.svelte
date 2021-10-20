<script>
  import {flip} from "svelte/animate";
  import {dndzone} from "svelte-dnd-action";
  import {
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
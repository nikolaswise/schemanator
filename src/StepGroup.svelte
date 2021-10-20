<script>
  import {flip} from "svelte/animate";
  import {dndzone} from "svelte-dnd-action";
  import StepChild from './StepChild.svelte'
  export let step

  const flipDurationMs = 300;

  function handleDndConsider(e) {
    step.children = e.detail.items;
  }

  function handleDndFinalize(e) {
    step.children = e.detail.items;
  }
</script>

<div class="step-group">
  <p>≡ Step:</p>
  <div
    use:dndzone="{{
      items: step.children,
      flipDurationMs,
      dropFromOthersDisabled: true}}"
    on:consider="{handleDndConsider}"
    on:finalize="{handleDndFinalize}"
  >
    {#each step.children as child(child.id)}
      <StepChild child={child} />
    {/each}
  </div>
</div>

<style>
  .draggable {
    cursor: grab;
  }
  .draggable:active {
    cursor: grabbing;
  }
  .step-group {
    border: 1px solid var(--dark-gray);
    background-color: var(--off-white);
    padding: 1rem;
    margin-bottom: 1rem;
  }
  p {
    font-weight: 600;
    margin: 0;
    padding-bottom: 0.5rem;
  }
</style>
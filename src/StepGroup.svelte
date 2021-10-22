<script>
  import {flip} from "svelte/animate";
  import {dndzone} from "svelte-dnd-action";
  import short from "short-uuid"
  import { createEventDispatcher } from 'svelte';

  import StepChild from './StepChild.svelte'
  export let step

  const dispatch = createEventDispatcher();
  const flipDurationMs = 300;

  function handleDndConsider(e) {
    step.children = e.detail.items;
  }

  function handleDndFinalize(e) {
    step.children = e.detail.items;
  }

  const createNewChild = (e) => {
    e.preventDefault()
    step.children = [...step.children, {
      id: short.generate(),
      text: '',
      type: 'HowToTip',
      image: null,
    }]
  }

  const handleDeleteChild = (e) => {
    step.children = step.children.filter(child => {
      return child.id !== e
    })
  }

  const deleteStep = (e) => {
    e.preventDefault()
    dispatch('delete', {id: step.id})
  }

</script>

<div class="step-group">
  <div class="group-header">
    <p>≡ Step:</p>
    <button on:click={deleteStep}>
      Delete Step
    </button>
  </div>
  <div
    use:dndzone="{{
      items: step.children,
      flipDurationMs,
      dropFromOthersDisabled: true}}"
    on:consider="{handleDndConsider}"
    on:finalize="{handleDndFinalize}"
  >
    {#each step.children as child(child.id)}
      <StepChild
        on:delete={handleDeleteChild(child.id)}
        child={child}
      />
    {/each}
  </div>
  <button on:click={createNewChild}>
    Add Item
  </button>
</div>

<style>
  .draggable {
    cursor: grab;
  }
  .draggable:active {
    cursor: grabbing;
  }
  .group-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
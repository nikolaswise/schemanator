<script>
  import {flip} from "svelte/animate";
  import {dndzone} from "svelte-dnd-action";
  import short from "short-uuid"
  import { createEventDispatcher } from 'svelte';

  import {
    steps,
  } from './data.js'

  import StepGroup from './StepGroup.svelte';


  export let sectionSteps

  const dispatch = createEventDispatcher();
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

  const createNewStep = (e) => {
    e.preventDefault()
    array = [...array, {
      id: short.generate(),
      name: '',
      children: [{
        id: short.generate(),
        text: "",
        type: "HowToDirection",
        image: null,
      }]
    }]
  }

  const handleDeleteStep = (e) => {
    array = array.filter(step => {
      return step.id !== e
    })
  }

  const deleteSection = (e) => {
    e.preventDefault()
    console.log(`delete this section`)
    dispatch('delete')
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
      <StepGroup
        on:delete={handleDeleteStep(step.id)}
        bind:step={step}
      />
    </div>
  {/each}
</div>

<div class="section-footer">
  <button on:click={createNewStep}>
    Add Step
  </button>

  {#if sectionSteps}
    <button on:click={deleteSection}>
      Delete Section
    </button>
  {/if}
</div>

<style>
  .draggable {
    cursor: grab;
  }
  .draggable:active {
    cursor: grabbing;
  }
  .section-footer {
    display: flex;
    justify-content: space-between;
  }
</style>
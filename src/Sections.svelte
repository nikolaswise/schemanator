<script>
  import {flip} from "svelte/animate";
  import {dndzone} from "svelte-dnd-action";
  import {
    sections,
  } from './data'

  import Steps from './Steps.svelte';

  const flipDurationMs = 300;

  function handleDndConsider(e) {
    $sections = e.detail.items;
  }

  function handleDndFinalize(e) {
    $sections = e.detail.items;
  }

  console.log(sections)
</script>

<div
  use:dndzone="{{items: $sections, flipDurationMs}}"
  on:consider="{handleDndConsider}"
  on:finalize="{handleDndFinalize}"
>
  {#each $sections as section(section.id)}
    <div
      class="section draggable"
      animate:flip="{{duration: flipDurationMs}}"
    >
      <label>
        ≡ Section Name:
        <input
          bind:value={section.name}
          type="text"
          name="sectionName"
        >
      </label>
      <Steps />
    </div>
  {/each}
</div>

<style>
  .section {
    border: 1px solid var(--dark-gray);
    background-color: var(--white);
    padding: 1rem;
    margin-bottom: 1rem;
  }
  .draggable {
    cursor: grab;
  }
  .draggable:active {
    cursor: grabbing;
  }
  p {
    font-weight: 600;
  }
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
</style>
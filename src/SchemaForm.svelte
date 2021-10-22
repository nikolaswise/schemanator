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
  } from './data.js'

  import Steps from './Steps.svelte';
  import Sections from './Sections.svelte';
  import Materials from './Materials.svelte';

  let hasSections = $sections.length > 0 ? true : false
  let tmpSections
  const clearSections = () => {
    tmpSections = $sections
    $sections = null
    hasSections = false
    console.log(tmpSections)
    console.log('remove sections, repace with steps')
  }
  const resetSections = () => {
    $sections = tmpSections
    hasSections = true
  }
  const handleSections = (e) => {
    e.target.checked
      ? resetSections()
      : clearSections()
  }

</script>

<form action=''>
  <button>
    Reset
  </button>
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
    Tools:
  </p>
  <Materials bind:items={$tools}/>

  <p>
    Supplies:
  </p>
  <Materials bind:items={$supplies}/>

  <p>
    Supplies:
  </p>

  <p>
    Steps:

    <label>
      Group by Section
      <input
        type="checkbox"
        name="useSection"
        on:change={handleSections}
        checked={hasSections}
      >
    </label>
  </p>

  {#if hasSections}
    <Sections />
  {:else}
    <Steps />
  {/if}

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
  p {
    display: flex;
    justify-content: space-between;
  }
  p label {
    display: inline-block;
    margin-bottom: 0;
  }
  p input {
    display: inline;
    width: auto;
    margin-top: 0;
    margin-bottom: 0;
  }
</style>
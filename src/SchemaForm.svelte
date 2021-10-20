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

  import Steps from './Steps.svelte';
  import Sections from './Sections.svelte';

  let hasSections = $sections.length > 0 ? true : false
  const clearSections = () => {
    hasSections = false
    console.log('remove sections, repace with steps')
  }
  const handleSections = (e) => {
    e.target.checked
      ? hasSections = true
      : clearSections()
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
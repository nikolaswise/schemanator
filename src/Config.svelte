<script>
  import { activeOptions } from './Data'
  let configIsOpen = false
  let toggleConfig = () => configIsOpen = !configIsOpen
  let options = [
    'Tools',
    'Supplies',
    'Prep Time',
    'Perform Time',
    'Total Time',
    'Sections',
    'Estimated Cost'
  ]
</script>


<div class="head">
  <h2>Config</h2>  
  <button
    on:click={toggleConfig}
  >
    {#if configIsOpen}
      Close
    {:else}
      Edit
    {/if}
  </button>
</div>

{#if configIsOpen}
  <div class="body">
    {#each options as option}
      <label>
        <input
          type=checkbox
          bind:group={$activeOptions}
          value={option}
        >
        {option}
      </label>
    {/each}
  </div>
{/if}

<style>
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .body {
    padding: 1rem;
    background-color: var(--white);
    border: 1px solid var(--dark-gray);
    border-radius: 3px;
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(
      auto-fill,
      minmax(8rem, 1fr)
    );
  }
  h2 {
    font-size: 1rem;
    font-weight: 600;
    margin: 0;
    padding: 0;
  }
  button {
    margin-bottom: 0;
  }
</style>
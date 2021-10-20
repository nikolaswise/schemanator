<script>
  import {
    name,
    description,
    estimatedCostNumber,
    estimatedCostUnit,
    prepTime,
    performTime,
    totalTime,
    tools,
    supplies,
    sections,
    steps    ,
  } from './data.js'

  import { generateSchema } from './generateSchema.js'
  import ImportSchema from './ImportSchema.svelte'

  let snippet
  $: {
    snippet = `
${JSON.stringify(generateSchema({
  name: $name,
  description: $description,
  estimatedCostNumber: $estimatedCostNumber,
  estimatedCostUnit: $estimatedCostUnit,
  prepTime: $prepTime,
  performTime: $performTime,
  totalTime: $totalTime,
  tools: $tools,
  supplies: $supplies,
  sections: $sections,
  steps: $steps,
}), null, ' ')}
`
  }

  let copySuccess = false
  let copyFailure = false

  const copyToClipboard = () => {
    navigator.clipboard.writeText(snippet)
      .then(() => {
        copySuccess = true
        setTimeout(() => {copySuccess = false}, 3000);
      })
      .catch(() => {
        copyFailure = true
        setTimeout(() => {copyFailure = false}, 3000);
      })
  }

</script>

<div>
  <button on:click={copyToClipboard}>
    {#if copySuccess}
      ✅
    {:else if copyFailure}
      ❌
    {:else}
      📋
    {/if}
  </button>
  <pre><code>
  {snippet}
  </code></pre>
</div>

<ImportSchema />


<style>
  div {
    position: relative;
  }

  pre {
    background-color: var(--white);
    border: 1px solid var(--dark-gray);
    border-radius: 3px;
    padding: 2rem;
    overflow: scroll;
  }

  button {
    position: absolute;
    right: 2px;
    top: 2px;
  }
</style>

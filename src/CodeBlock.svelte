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

</script>

<pre><code>
{snippet}
</code></pre>

<style>
  pre {
    background-color: var(--white);
    border: 1px solid var(--dark-gray);
    border-radius: 3px;
    padding: 2rem;
    overflow: scroll;
  }
</style>

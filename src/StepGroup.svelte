<script>
  import StepChild from './StepChild.svelte'
  export let step
</script>

<div class="step-group">
  <p>≡ Key: {step.id}</p>
  {#each step.children as child}
    <StepChild bind:child={child} />
  {/each}
</div>

<style>
  .step-group {
    border: 1px solid var(--dark-gray);
    padding: 1rem;
    margin-bottom: 1rem;
  }
</style>
<script>
  import StepChild from './StepChild.svelte'
  export let step
</script>

<div class="step-group">
  <p>≡ Step:</p>
  {#each step.children as child}
    <StepChild bind:child={child} />
  {/each}
</div>

<style>
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
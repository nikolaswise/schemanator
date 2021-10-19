<script>
  export let step

  let hasImage = false
</script>

<div class="step-group">
  <p>≡ Key: {step.id}</p>

  {#each step.children as child}
    <div class="child">
      <div class="group">
        <label>
          Type:
          <select bind:value={child.type}>
            <option value="HowToDirection">
              Direction
            </option>
            <option value="HowToTip">
              Tip
            </option>
          </select>
        </label>
        <label class="inline">
          Has Image
          <input bind:value={hasImage} type="checkbox" name="hasImage">
        </label>
      </div>

      <label>
        Text:
        <textarea
          bind:value={child.text}
          type="text"
        />
      </label>

      {#if hasImage}
        <label>
          Image URL:
          <input
            bind:value={child.image}
            type="text"
          />
        </label>
      {/if}
    </div>
  {/each}
</div>

<style>
  .step-group {
    border: 1px solid var(--dark-gray);
    padding: 1rem;
    margin-bottom: 1rem;
  }
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
  input[type="checkbox"] {
    width: auto;
    display: inline;
  }
  .group {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .group label {
    margin-bottom: 0rem;
  }
  .child {
    border-top: 1px solid var(--dark-gray);
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .inline {
    display: inline;
  }
</style>
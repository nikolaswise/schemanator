<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let child

  let hasImage = child.image ? true : false

  const clearImage = () => {
    hasImage = false
    child.image = null
  }

  const handleImage = (e) => {
    console.log(e.target.checked)
    e.target.checked
      ? hasImage = true
      : clearImage()
  }

  const deleteChild = (e) => {
    e.preventDefault()
    console.log(`delete this sweet child ${child.id}`)
    dispatch('delete', {id: child.id})
  }
</script>

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
      <input
        on:change={handleImage}
        checked={hasImage}
        type="checkbox"
        name="hasImage"
      >
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
  <div class="right">
    <button on:click={deleteChild}>
      Delete
    </button>
  </div>
</div>

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
    padding-bottom: 0rem;
  }
  .inline {
    display: inline;
  }
  .right {
    text-align: right;
  }
</style>
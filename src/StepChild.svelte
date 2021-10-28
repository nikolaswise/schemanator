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
    e.target.checked
      ? hasImage = true
      : clearImage()
  }

  const deleteChild = (e) => {
    e.preventDefault()
    dispatch('delete', {id: child.id})
  }

  // s s s s siiiide effffects!
  const cleanThumborUrl = (url) => {
    // lol this is gross
    if (url && url.includes(`cdn.vox-cdn.com/thumbor`)) {
      let parts = url.split('cdn.vox-cdn.com')
      child.image = `${parts[0]}cdn.vox-cdn.com${parts[2]}`
    }
  }

  const escapeQuotes = (text) => {
    if (text.includes(`“`) || text.includes(`”`)) {
      child.text = child.text
        .replaceAll(`“`, `\"`)
        .replaceAll(`”`, `\"`)
    }
  }

  $: {
    cleanThumborUrl(child.image)
  }

  $: {
    escapeQuotes(child.text)
  }

</script>

<div class="child">
  <div class="group">
    <label>
      ≡ Type:
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
    <div class="image-preview">
      <label>
        Image URL:
        <input
          bind:value={child.image}
          type="text"
        />
      </label>
      <figure>
        {#if child.image}
          <img src="{child.image}">
        {:else}
          ✕
        {/if}
      </figure>
    </div>
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
  .image-preview {
    display: flex;
  }
  .image-preview label {
    flex: 1;
  }
  figure {
    margin: 0 0 0.5rem 1rem;
    border: 1px solid var(--light-gray);
    width: 5rem;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
</style>
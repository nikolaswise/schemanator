<script>
  import {flip} from "svelte/animate";
  import {dndzone} from "svelte-dnd-action";
  import short from "short-uuid"
  import { createEventDispatcher } from 'svelte';


  export let items

  const dispatch = createEventDispatcher();
  const flipDurationMs = 300;

  function handleDndConsider(e) {
    items = e.detail.items;
  }

  function handleDndFinalize(e) {
    items = e.detail.items;
  }

  const createNewMaterial = (e) => {
    e.preventDefault()
    items = [...items, {
      id: short.generate(),
      name: '',
      image: null
    }]
  }

  const deleteMaterial = (id) => (e) => {
    e.preventDefault()
    console.log(`delete this material ${id}`)
    items = items.filter(item => {
      return item.id !== id
    })
  }
</script>

<div
  use:dndzone="{{
    items: items,
    flipDurationMs,
    dropFromOthersDisabled: true
  }}"
  on:consider="{handleDndConsider}"
  on:finalize="{handleDndFinalize}"
>
  {#each items as item(item.id)}
    <div
      class="material draggable"
      animate:flip="{{duration: flipDurationMs}}"
    >
      <label>
        ≡ Name:
        <input
          bind:value={item.name}
          type="text"
        />
      </label>
      <div class="image-preview">
        <label>
          Image URL:
          <input
            bind:value={item.image}
            type="text"
          />
        </label>
        <figure>
          {#if item.image}
            <img src="{item.image}">
          {:else}
            ✕
          {/if}
        </figure>
      </div>
      <div class="right">
        <button on:click={deleteMaterial(item.id)}>
          Delete
        </button>
      </div>

    </div>
  {/each}
</div>

<div class="section-footer">
  <button on:click={createNewMaterial}>
    Add Material
  </button>
</div>

<style>
  .material {
    border: 1px solid var(--dark-gray);
    background-color: var(--off-white);
    padding: 1rem;
    margin-bottom: 1rem;
  }
  .draggable {
    cursor: grab;
  }
  .draggable:active {
    cursor: grabbing;
  }
  .section-footer {
    display: flex;
    justify-content: space-between;
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

  .right {
    text-align: right;
  }
</style>
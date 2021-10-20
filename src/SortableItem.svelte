<script>
  import {flip} from "svelte/animate";
  const flipDurationMs = 300;

  export let items
</script>

{#each items as item(item.id)}
  <div
    class="draggable"
    animate:flip="{{duration: flipDurationMs}}"
  >
    <slot child={item} />
  </div>
{/each}

<style>
  .draggable {
    cursor: grab;
  }
  .draggable:active {
    cursor: grabbing;
  }
</style>
<script>
  import {dndzone} from "svelte-dnd-action";
  const flipDurationMs = 300;
  export let items

  function handleDndConsider(e) {
    items = e.detail.items;
  }

  function handleDndFinalize(e) {
    items = e.detail.items;
  }
</script>

<div
  use:dndzone="{{items, flipDurationMs, dropFromOthersDisabled: true}}"
  on:consider="{handleDndConsider}"
  on:finalize="{handleDndFinalize}"
>
  <slot />
</div>

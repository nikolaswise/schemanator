<script>
  import short from "short-uuid"

  import {
    name,
    description,
    prepTime,
    performTime,
    totalTime,
    tools,
    supplies,
    steps,
    sections,
  } from './data.js'

  let modalIsOpen = false
  let snippet = ''

  const listenForEsc = (e) => {
    if (e.code === `Escape`) {
      closeModal()
    }
  }
  const closeModal = () => {
    modalIsOpen = false
    document.removeEventListener('keydown', listenForEsc)
  }
  const importSchema = () => {
    console.log('open a modal and paste some shit in here')
    modalIsOpen = true
    document.addEventListener('keydown', listenForEsc)
  }
  const parseSnippet = () => {
    closeModal()
    let json = JSON.parse(snippet)
    $name = json.name
    $description = json.description
    $prepTime = json.prepTime
    $performTime = json.performTime
    $totalTime = json.totalTime

    if (json.tool) {
      $tools = json.tool.map(tool => {
        return {
          id: short.generate(),
          name: tool.name,
          image: tool.image ? tool.image : null
        }
      })
    }

    if (json.supply) {
      $supplies = json.supply.map(supply => {
        return {
          id: short.generate(),
          name: supply.name,
          image: supply.image ? supply.image : null
        }
      })
    }

    const populateNodes = (node) => {
      return {
        id: short.generate(),
        text: node.text,
        type: node[`@type`],
        image: node.image,
      }
    }

    const populateSteps = (step) => {
      return {
        id: short.generate(),
        children: step.itemListElement.map(populateNodes)
      }
    }

    if (json.step[0][`@type`] === `HowToSection`) {
      console.log('render sections')
      $sections = json.step.map(section => {
        console.log(section.itemListElement)
        return {
          id: short.generate(),
          name: section.name,
          steps: section.itemListElement.map(populateSteps)
        }
      })
    } else {
      $steps = populateSteps(json.step)
    }

  }
</script>

<button on:click={importSchema}>
  Import Schema
</button>

{#if modalIsOpen}
  <div class="screen">
    <div class="modal">
      <label>
        Paste Snippet:
        <textarea
          rows=10
          bind:value={snippet}
        />
      </label>
      <div class="footer">
        <button on:click={parseSnippet}>
          Okay
        </button>
        <button on:click={closeModal}>
          cancel
        </button>
      </div>
    </div>
  </div>
{/if}

<style>
  .screen {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left:  0;
    right: 0;
    background-color: rgba(52, 52, 51, 0.3)
  }

  .modal {
    position: relative;
    padding: 1rem;
    border: 1px solid var(--dark-gray);
    background-color: var(--off-white);
    max-width: 100%;
    width: 30rem;
  }

  .footer {
    display: flex;
    justify-content: space-between;
  }

  p,
  label {
    display: block;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  textarea {
    font-family: monospace;
    display: block;
    width: 100%;
    margin-top: 0.5rem;
    border: 1px solid var(--dark-gray);
    border-radius: 3px;
  }
</style>
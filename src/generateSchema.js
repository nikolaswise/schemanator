import { get } from 'svelte/store';
import {
  name,
  description,
  prepTime,
  performTime,
  totalTime,
  tools,
  supplies,
  steps
} from './data.js'

// Accepts a step array, as desribed above
// Return a HowToStep object
const mapSteps = (arr) => arr.map((step, i) => {
  return {
    "@type": "HowToStep",
    "position": `${i + 1}`,
    "itemListElement": step.children.map((dir, i) => {
      return {
        "@type": dir.type,
        "position": `${i + 1}`,
        "text": dir.text
      }
    })
  }
})

// Accepts a section array, as desribed above
// Return a HowToSection object
const mapSections = (arr) => arr.map((section, i) => {
  return {
    "@type": "HowToSection",
    "position": `${i + 1}`,
    "name": section.name,
    "itemListElement": mapSteps(section.steps)
  }
})

// Accept the data for the steps and reutrn either
// the array of sections
// or the array of steps
const renderSteps = (arr) => {
  return arr[0].children[0].name // @TODO lol this is probably kinda gross
    ? mapSections(arr)
    : mapSteps(arr)
}

// Accepts a string either `HowToSupply` or `HowToTool`
// Returns a fn:
//   Accepts an array of strings
//   Returns a HowToTools array
const mapDependencies = (type) => (arr) => arr.map(({name, image}) => {
  return {
    "@type": type,
    name,
    image
  }
})

// Put it all together and output a JSON-LD blob
export const generateSchema = ({
  name,
  description,
  prepTime,
  performTime,
  totalTime,
  tools,
  supplies,
  steps,
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    prepTime,
    performTime,
    totalTime,
    // tool: mapDependencies('HowToTool')(tools),
    // supply: mapDependencies('HowToSupply')(supplies),
    "step": renderSteps(steps)
  }
}

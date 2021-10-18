// These are more forgiving top-level config type things
const name = "How to Draw an Owl"
const description = "Draw your very own owl in time for the holidays!"
const estimatedCost = {
  currency: 'USD',
  value: '0'
}
const prepTime = 'PT5M'
const performTime = 'PT25M'
const totalTime = 'PT30M'
// @TODO these will probably want to get expanded into objects
// that have name and image keys, since I think we'll want to 
// use all the flexibillity available in the schema.
const tools = ['pencil', 'pen']
const supplies = ['paper', 'ink']

// Steps are an array of `step` values
// a `step` is either a string – to denote a simple direction
// or an object with a `tip` key with a string value
// used to denote this this is the tip for the step. 
// The object approach is required in order to determine 
// the order of the tip or potentially include multuple tips.
// The order of elements in the array _is_ important.
const pencil_steps = [
  ['draw a circle'],
  [{tip: 'this bit is tricky'}, 'draw another circle'],
  ['draw the rest of the owl', {tip: 'dont fuck it up'!}]
]
  
// This is another example of a steps array.
const ink_steps = [
  ['get your pen'],
  [{tip: 'Try and do a good job'}, 'Ink the owl.']
]  

// Sections are an array of objets:
// name: string denoting the _name_ of the section
// steps: array, a steps array as described above.
const sections = [
  { name: 'Penciling', steps: pencil_steps },
  { name: 'Inking', steps: ink_steps }
]  

// Alternate data format combining all texts into a single array
const how_to_draw_an_owl = [
  { 
    name: "Penciling",
    steps: [
      ['draw a circle'],
      [{tip: 'this bit is tricky'}, 'draw another circle'],
      ['draw the rest of the owl', {tip: 'dont fuck it up'!}]
    ]
  },{
    name: "Inking",
    steps: [
      ['get your pen'],
      [{tip: 'Try and do a good job'}, 'Ink the owl.']
    ]
  }
]

// Formatting Functions
// Accepts an object with text and position keys
// returns a Schema.org HowToDirection object
const direction = ({text, position}) => {
  return {
    "@type": "HowToDirection",
    "position": `${position}`,
    "text": text
  }
}

// Accepts an object with text and position keys
// returns a Schema.org HowToTip object
const tip = ({text, position}) => {
  return {
    "@type": "HowToTip",
    "position": `${position}`,
    "text": text
  }
}

// Accepts a step array, as desribed above
// Return a HowToStep object
const mapSteps = (arr) => arr.map((step, i) => {
  return {
    "@type": "HowToStep",
    "position": `${i}`,
    "itemListElement": step.map((dir, i) => {
      return dir.tip 
        ? tip({text: dir.tip, position: i})
        : direction({text: dir, position: i})
    })
  }
})

// Accepts a section array, as desribed above
// Return a HowToSection object
const mapSections = (arr) => arr.map((section, i) => {
  return {
    "@type": "HowToSection",
    "position": `${i}`,
    "name": section.name,
    "itemListElement": mapSteps(section.steps)
  }
})

// Accepts an array of strings
// Returns a HowToTools array
const mapTools = (arr) => arr.map(tool => {
  return {
    "@type": "HowToTool",
    "name": tool
  }
})

// Accepts an array of strings
// Returns a HowToSupplies array
const mapSupplies = (arr) => arr.map(supply => {
  return {
    "@type": "HowToSupply",
    "name": supply
  }
})

// Put it all together and output a JSON-LD blob
const generateSchema = (data) => {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    prepTime,
    performTime,
    totalTime,
    tool: mapTools(tools),
    supply: mapSupplies(supplies),
    // @TODO: This function needs to determing if it contains sections
    // or not and either mapSections or mapSteps accordingly. 
    // Should be able to check for existence of the `name` key on the
    // first element.
    "step": mapSections(data)
  }
}

console.log(`
<script type="application/ld+json">
${JSON.stringify(generateSchema(how_to_draw_an_owl), null, ' ')}
</script>
`)

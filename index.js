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
const tools = [{
  name: 'Pencil',
  image: null
},{
  name: 'Pen',
  image: null
}]
const supplies = [
  {
    name: 'Ink',
    image: null
  },{
    name: 'Ink',
    image: null
  }
]

// Steps are an array of `step` values
// The order of elements in the array _is_ important.
const pencil_steps = [
  [
    {
      text: "Draw a Circle",
      type: "HowToDirection"
    }
  ],[
    {
      text: "This next bit is tricky",
      type: "HowToTip"
    },{
      text: "Draw another circle",
      type: "HowToDirection"
    }
  ],[
     {
       text: "Draw the rest of the owl.",
       type: "HowToDirection"
     },{
       text: "Don't fuck it up!",
       type: "HowToTip"
     } 
  ]
]
  
// This is another example of a steps array.
const ink_steps = [
  [
    {
      text: "Get your pen.",
      type: "HowToDirection"
    }
  ],[
    {
      text: "Try and do a good job.",
      type: "HowToTip"
    },{
      text: "Ink over the pencil lines.",
      type: "HowToDirection"
    }
  ]
]  

// Sections are an array of objets:
// name: string denoting the _name_ of the section
// steps: array, a steps array as described above.
const how_to_draw_an_owl = [
  { name: 'Penciling', steps: pencil_steps },
  { name: 'Inking', steps: ink_steps }
]  

// Accepts a step array, as desribed above
// Return a HowToStep object
const mapSteps = (arr) => arr.map((step, i) => {
  return {
    "@type": "HowToStep",
    "position": `${i + 1}`,
    "itemListElement": step.map((dir, i) => {
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
    // prepTime,
    // performTime,
    // totalTime,
    // tool: mapTools(tools),
    // supply: mapSupplies(supplies),
    // @TODO: This function needs to determing if it contains sections
    // or not and either mapSections or mapSteps accordingly. 
    // Should be able to check for existence of the `name` key on the
    // first element.
    "step": mapSections(data)
  }
}

// generateSchema(how_to_draw_an_owl)

console.log(`
<script type="application/ld+json">
${JSON.stringify(generateSchema(how_to_draw_an_owl), null, ' ')}
</script>
`)

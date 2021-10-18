// These are more forgiving top-level config type things
const name = "How to use iOS 15’s new Focus modes"
const description = "When you first start to set Focus up, it can seem a little daunting. There are a lot of choices, and a lot of ways you can tweak it. In fact, it may take a while before you get the combination of settings that works best for your lifestyle. But in the end, it will be worth it — it will mean that you won’t be sidelined during times you need to concentrate, and you won’t be bothered by irrelevant notifications when you’ve got other activities in hand."
const estimatedCost = null
// const estimatedCost = {
//   currency: 'USD',
//   value: '0'
// }
const prepTime = null
const performTime = null
const totalTime = null
// const totalTime = 'PT30M'

// These arrays are both object with name and image keys
// names are string, images are URLs
const tools = []
// const tools = [{
//   name: 'Pencil',
//   image: null
// },{
//   name: 'Pen',
//   image: null
// }]
const supplies = []
// const supplies = [
//   {
//     name: 'Ink',
//     image: null
//   },{
//     name: 'Ink',
//     image: null
//   }
// ]

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
    },{
      text: "Sort of above the first circle.",
      type: "HowToDirection"
    }
  ],[
     {
       text: "Draw the rest of the owl.",
       type: "HowToDirection"
     },{
       text: "Don't fuck it up!",
       type: "HowToTip"
     },{
       text: "It's not that hard",
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
const how_to_cartoon_an_owl = [
  { name: 'Penciling', steps: pencil_steps },
  { name: 'Inking', steps: ink_steps }
]  

const how_to_draw_an_owl = pencil_steps

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

// Accept the data for the steps and reutrn either
// the array of sections
// or the array of steps
const renderSteps = (arr) => {
  return arr[0].name // @TODO lol this is probably kinda gross
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
const generateSchema = (data) => {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    prepTime,
    performTime,
    totalTime,
    tool: mapDependencies('HowToTool')(tools),
    supply: mapDependencies('HowToSupply')(supplies),
    "step": renderSteps(data)
  }
}

console.log(`
<script type="application/ld+json">
${JSON.stringify(generateSchema(how_to_draw_an_owl), null, ' ')}
</script>
`)

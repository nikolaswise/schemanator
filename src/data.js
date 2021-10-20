import { writable } from 'svelte/store';

export const activeOptions = writable([])

export const name = writable('How To Draw an Owl')
export const description = writable('Learn how to draw your very own own, in time for the holidays!')
export const estimatedCostNumber = writable()
export const estimatedCostUnit = writable('USD')
export const prepTime = writable('')
export const performTime = writable('')
export const totalTime = writable('')
export const tools = writable([])
export const supplies = writable([])

const sample_steps = [
  {
    id: 'osfnd',
    children: [
      {
        id: "2rwf",
        text: "Draw a Circle",
        type: "HowToDirection",
        image: 'http://www.fillmurray.com/200/300',
      }
    ]
  },{
    id: 'soif',
    children: [
      {
        id: "h6t",
        text: "This next bit is tricky",
        type: "HowToTip",
        image: null,
      },{
        id: "6yhgd",
        text: "Draw another circle",
        type: "HowToDirection",
        image: null,
      },{
        id: "fasde",
        text: "Sort of above the first circle.",
        type: "HowToDirection",
        image: null,
      }
    ]
  },{
    id: 'ps9nba',
    children: [
      {
       id: "sve4w",
       text: "Draw the rest of the owl.",
       type: "HowToDirection",
       image: null,
    },{
       id: "o8i7rth",
       text: "Don't fuck it up!",
       type: "HowToTip",
       image: null,
    },{
       id: "wsvs4",
       text: "It's not that hard",
       type: "HowToTip",
       image: null,
      }
    ]
  }
]

export const sections = writable([{
  id: '09esgjs',
  name: 'Penciling an Owl',
  steps: sample_steps
},{
  id: 'owiufgbs',
  name: 'Inking an Owl',
  steps: []
},{
  id: '3tiowh',
  name: 'Coloring an Owl',
  steps: []
}])
export const steps = writable(sample_steps)
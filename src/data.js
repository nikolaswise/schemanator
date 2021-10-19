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

export const sections = writable([])
export const steps = writable([
  {
    id: 'osfnd',
    children: [
      {
        text: "Draw a Circle",
        type: "HowToDirection",
        image: null,
      }
    ]
  },{
    id: 'soif',
    children: [
      {
        text: "This next bit is tricky",
        type: "HowToTip",
        image: null,
      },{
        text: "Draw another circle",
        type: "HowToDirection",
        image: null,
      },{
        text: "Sort of above the first circle.",
        type: "HowToDirection",
        image: null,
      }
    ]
  },{
    id: 'ps9nba',
    children: [
      {
       text: "Draw the rest of the owl.",
       type: "HowToDirection",
       image: null,
    },{
       text: "Don't fuck it up!",
       type: "HowToTip",
       image: null,
    },{
       text: "It's not that hard",
       type: "HowToTip",
       image: null,
      }
    ]
  }
])
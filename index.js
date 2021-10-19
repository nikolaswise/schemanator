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

const begin_to_focus_steps = [
  [{
    text: 'Access Focus mode via your Control Center',
    type: 'HowToDirection'
  },{
    text: `Swipe down from the upper right corner`,
    type: 'HowToTip'
  },{
    text: `You’ll see the Focus button with a moon icon next to it. If you tap the icon, then the main Do Not Disturb profile will be active.`,
    type: 'HowTodirection'
  },{
    text: `If you tap anywhere else in the button, you’ll see a selection of other profiles that you can activate.`,
    type: 'HowToTip'
  },{
    text: `Tap on the three dots to the right of each button, and you can set the length of time you want that Focus profile to be active. Or you can tap the Settings button to tweak the settings for that Focus.`,
    type: `HowToDirection`
  }]
]

const set_up_your_profiles_steps = [
  [{
    text: `When you first open the Focus page in your settings, you’ll see a list of several profiles, starting with the basic Do Not Disturb and then going on to Personal, Sleep, and Work. If you tap on the plus sign in the upper right corner of the screen, you’ll find the others, including Driving, Fitness, Gaming, Mindfulness, and Readings. `,
    type: "HowToDirection"
  },{
    text: `If none of those suit, you can create a custom profile. In addition, there is a toggle that lets you can share the profiles across your various Apple devices.`,
    type: "HowToTip"
  }],[{
    text: `Start by tapping on Do Not Disturb.`,
    type: "HowToDirection"
  }],[{
    text: `You may want to allow calls to come in from family members, or notifications from your work Slack. To make these exceptions, tap on the People or Apps box to get to the Allowed Notifications page.`,
    type: `HowToDirection`
  },{
    text: `It doesn’t really matter which you tap; you’ll end up on the same page.`,
    type: `HowToTip`
  }],[{
    text: `If you’re choosing one or more apps, then tap the App tab and then the plus button`,
    type: `HowToDirection`
  }],[{
    text: `You’ll get a list of your installed apps; check off those you want to add to the Allowed Notifications list, and select Done at the top right of the page.`,
    type: `HowToDirection`
  },{
    text: `You’ll now see your chosen apps listed under Allowed Apps.`,
    type: `HowToTip`
  },{
    text: `If you change your mind for any of your apps, you can just tap the minus sign next to each icon or select the “Remove All” link on the upper right of the Allowed Apps section.`,
    type: `HowToTip`
  }],[{
    text: `You can also allow Time Sensitive notifications to come through by toggling it on. Time Sensitive notifications are from apps you’ve individually tagged as important enough to break through any filter, no matter what.`,
    type: `HowToTip`
  },{
    text: `To select which apps are that important to you, you have to leave Focus and go to Settings > Notifications; select the app or apps you want to qualify — say, Calendar — and make sure Time Sensitive notifications is toggled on for that app.`,
    type: `HowToTip`
  }],[{
    text: `The way you allow notifications from specific people to break through the set Focus mode is pretty much the same as with the apps: select the plus sign under the People tab to add from your list of contacts`,
    type: `HowToDirection`
  },{
    text: `You can also allow incoming calls from various categories of people: either everyone who calls, no one (if you really want not to be disturbed), people who are tagged as favorites, or anyone in your contact list. You can also allow through any calls that are repeated within three minutes.`,
    type: `HowToTip`
  }]
]

const focus_profiles_steps = [
  [{
    text: `When you tap on a profile that has not yet been set up, you are presented with a set of screens that walk you through the initial processing, including which people and apps should be allowed to notify you when the Focus is active.`,
    type: `HowToDirection`
  }],[{
    text: `After that, you are dropped into the Focus page for that profile, which will be similar to the Do Not Disturb setup described above.`,
    type: `HowToDirection`
  }],[{
    text: `If none of the presets work for you, you can create a custom profile by tapping on the plus sign in the upper right corner of the main Focus screen and choosing Custom.`,
    type: `HowToDirection`
  }],[{
    text: `You will be asked to name your new profile and to choose a color and icon to represent it.`,
    type: `HowToDirection`
  }],[{
    text: `After that, the process is pretty much the same as for Personal, except that you can also tweak the name and appearance of the Focus in the profile’s screen.`,
    type: `HowToDirection`
  }]
]

const whats_next_steps = [
  [{
    text: `Now, when you tap the Focus icon in your Control Center, it will activate all the various features you’ve created for your profile.`,
    type: `HowToDirection`
  },{
    text: `Note that the last profile that was active will be the one that is featured: for example, if you last used your Driving profile, the Focus button will have the car icon.`,
    type: `HowToTip`
  }],[{
    text: `Touch the icon to active it, or touch the word Focus to switch to a different profile. `,
    type: `HowToDirection`
  }]
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

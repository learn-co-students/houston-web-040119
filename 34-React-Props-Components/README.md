# Props

## Objectives

- Learn how to identify components on a page, visually
- Understand how `create-react-app` works and what it offers a developer
- Get more familiarity with component hierarchy and the flow of information

## Outline

### Identify Components

![](https://github.com/flatiron-school/education-team-wiki/raw/master/lessons/assets/props_and_state.png)


### create-react-app

- `npm install -g create-react-app` (if you haven't)
- `create-react-app my-app` cd into it.
- `npm install --save semantic-ui-css` talk about what the --save does (adds to package.json, why do we care, etc.)
- _Get rid of everything in c-r-a that we don't know what it is. Service workers, css, tests... delete it all_
- Build out static version of the app with right component structure. (bring in Navbar component from morning) Mention that often in React there's like a certain minimum amount of boilerplate needed to be written to get your app up and rendering. I would make components such as

```js
import React from "react";

const PaintingList = () => {
  return <div>PaintingList</div>;
};

export default PaintingList;
```

so you can see things rendering correctly on page. Reminder that these are _just functions_. A bit different than class-based components seen in labs, but very very similar and all we have seen in lecture thus far. (Students will continue to have confusion over functional components though I show them every lecture, a deficiency in the curriculum?)

### Passing Props

In a top level component like App import the json data from painting_data and show that you can console.log it (in render) and have access to it. Ask the question of how you are going to get this data to the other components that need to know about it?

The answer, via props. _There is one way to pass data from one component to another in React, that is props. They go one direction, down from parent to child. In lecture 1, we passed props as arguments to a function. Even when using JSX that's really how you should think of props._ **Props are like arguments to a function. A component does not own it's own props they are passed to it from outside.** This is in contrast to state which we'll talk about next.

Pass the props from App to PaintingList and console.log them again. Now you are in a situation where you have an array of plain JS objects. What you want back is an array of the same number of elements, but each element should be a React component. What function does that sound like? `map`! We'll use `map` here for the same reason we would use map to take an array of numbers and double each number.

_**Quick Aside: The React Mod 4 2.1 curriculum teaches class-based components first, and then goes into functional components and their differences much later. It might be a good idea for you to teach only class-based components for now and get into some other structural patterns later, to be consistent with the labs. Use your best judgement. **_

```js
// ====================================
// Step 1
// PaintingList.js
// see the same number of things we should expect
import React from 'react'

const PaintingList = (props) => {
  const allPaintings =  props.paintings.map(painting => <li>hi</li>)

  return (
    <div>
      <ul>
        {allPaintings}
      </ul>
    </div>
  )
}

export default PaintingList

// ====================================
// Step 2
// PaintingList.js
// render Painting Components
import React from 'react'
import Painting from './Painting'

const PaintingList = (props) => {
  const allPaintings =  props.paintings.map(painting => <Painting />)

  return (
    <div>
      <ul>
        {allPaintings}
      </ul>
    </div>
  )
}

export default PaintingList

//Painting.js
import React from 'react'

const Painting = (props) => {
  return <li>Painting Component</li>
}

export default Painting

// ====================================
// Step 3
// show the titles
import React from 'react'
import Painting from './Painting'

const PaintingList = (props) => {
  const allPaintings =  props.paintings.map(painting => <Painting title={painting.title}/>)

  return (
    <div>
      <ul>
        {allPaintings}
      </ul>
    </div>
  )
}

export default PaintingList

//Painting.js
import React from 'react'

const Painting = (props) => {
  return <li>{props.title}</li>
}

export default Painting

// ====================================
// Step 4
// fill out Painting Component
// maybe discuss why it's nicer to pass a prop 'painting'
// vs. a title prop, image prop, artist name prop, dimension prop, etc.
import React from 'react'
import Painting from './Painting'

const PaintingList = (props) => {
  const allPaintings =  props.paintings.map(painting => <Painting painting={painting}/>)

  return (
    <div>
      <ul>
        {allPaintings}
      </ul>
    </div>
  )
}

export default PaintingList

//Painting.js
import React from 'react'

const Painting = (props) => {
  return (
    <li>
      <img src={painting.imageUrl} />
      <h1>{`${painting.title} by ${painting.artist.name}`}</h1>
      <p>{painting.date}</p>
      <p>{`${painting.dimensions.width} x ${painting.dimensions.height}`}</p>
    </li>
  )
}

export default Painting
```

Cover the whole flow again, how props get passed down multiple levels, get mapped over, etc. I do briefly talk about the `key` prop warning. Basically it's for React's internal workings so it can quickly know what components to update when it's doing that thing of updating the real DOM to look like the virtual DOM

If you want to make the Painting Component look fancy here's some markup: (_NOTE: this also adds the vote button I'll use later_)

```js
<div className="item">
  <div className="ui small image">
    <img src={props.painting.image} alt={props.painting.slug} />
  </div>
  <div className="middle aligned content">
    <div className="header">{`"${props.painting.title}" by ${
      props.painting.artist.name
    }`}</div>
    <div className="description">
      <a>
        <i className="large caret up icon" />
        {props.painting.votes} votes
      </a>
    </div>
  </div>
</div>
```

### Optional aside: Solidfying props

If you have time, it may be worth it to show them this bit of code to solidify their understanding of props and why we use components in the first place. I recommend having this code in a separate React app, so you can quickly spin it up.

```js
//App.js

import React, { Component } from 'react';
import {Donalds, PhilA, Dees} from './Restaurants'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Donalds />
        <PhilA />
        <Dees />
      </div>
    );
  }
}
export default App;


//Restaurants.js
import React from 'react'
import Meat from './meat.js'

const Donalds = (props) => {
  return <Meat stuff="Xanthan Gum"/>
}

const PhilA = (props) => {
  return <Meat type="Chicken"/>
}

const Dees = (props) => {
  return <Meat type="Beef"/>
}

export {Donalds, PhilA, Dees}


//Meat.js
import React from 'react'

const Meat = (props) => {
  return <h1>{props.type}</h1>
}

export default Meat
```

Take the students on a quick tour of the code, showing the relationship between the components and showing how we have three different components (Donalds, PhilA, and Dees) rendering the same component (Meat). Explain that the reason we use components is their reusability. Spin up this code on your server, but before showing them the results, put the Restaurants and Meat code side by side and ask them what they anticipate will appear on the page. Students may think that "Xanthan Gum", "Chicken", and "Beef" will appear as h1's, but because the name of the prop bassed by Donalds is `stuff` rather than `type`, only "Chicken" and "Beef" will be rendered. To drive this home, log the props inside Meat to show them how they're different. Explain that components don't care who their parent is, so long as their parent passes props using names that they can understand. You can even modify the code to pass different data types under the "type" prop to show another layer of flexibility.
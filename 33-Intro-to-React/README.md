Intro to React // JSX & Props
=============================
managaggaging the DOM
what the current state of the DOM is
what belongs in one particular file
code becoming unmanageable as the app grows

Adding event listeners to elements that dont exist
file structure,
tracking recursion


# Notes:

**Learning Goals**

* Use historical context and the Mod 3 experience to explain why React
* See what a React Component actually is (an object, made by a class or function)
* Build custom components and see initial JSX


1. What is JSX?
2. Why JSX?
3. What is a component?


**Task:**
```html
<div class="ui inverted orange menu">
    <a class='item'>
      <h2 class="ui header">
        <i class="paw icon"></i>
        <div class="content">
          ZooKeepr
        </div>
      </h2>
    </a>
  </div>
```

<!-- <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script> -->

## Slow abstraction to JSX

First form: *STATIC HTML*
```jsx
ReactDOM.render(
  <div>
    <h1>Hello, world!</h1>
    <h1>Hello, beef!</h1>
    <h1>Hello, squid!</h1>
  </div>,
  document.getElementById('root')
);
```


Second form: *Dynamic, reusable components using regular functions and arguments*
```jsx
function Greeting(phrase,name){
  return <h1>Hello {phrase}! - {name}</h1>
}

ReactDOM.render(
  <div>
    {Greeting("world", "Alex")}
    {Greeting("beef", "Peter")}
    {Greeting("squid", "Katarina")}
  </div>,
  document.getElementById('root')
)
```

THIRD FORM: *Static components using JSX*
```jsx
function Greeting(){
  return <h1>Hello world!</h1>
}

ReactDOM.render(
  <div>
    <Greeting />
    <Greeting />
    <Greeting />
  </div>,
  document.getElementById('root')
)
```

FINAL FORM: *Dynamic, reusable components using JSX and props*
```jsx
function Greeting(props){
  return <h1>Hello {props.phrase}! - {props.name}</h1>
}

ReactDOM.render(
  <div>
    <Greeting phrase="world" name="Alex"/>
    <Greeting phrase="beef" name="Peter"/>
    <Greeting phrase="squid" name="Katarina"/>
  </div>,
  document.getElementById('root')
)
```

## Thinking about props

In thinking about props, repeat this mantra: props are to components as arguments are to functions!

Think back to mod 1:
Before ActiveRecord, you passed in arguments one by one and in a particular order: `User.new("Alex", 23, "therapist")`

With ActiveRecord, you passed a single hash and mapped your values onto the specific keys they corresponded to:
`User.new(name: "Alex", age: 23, occupation: "therapist")`

This is very much analogous to the change over from regular ol' JS functions to JSX components

```jsx
// A regular ol' JS function with arguments <-- THE PAST
function Greeting(phrase, name){
  return <h1>Hello {phrase}! - {name}</h1>
}

// A JSX component using props <-- THE REACT WAY
function Greeting(props){
  return <h1>Hello {props.phrase}! - {props.name}</h1>
}
```

<!-- Game of Thrones Spoiler App -->

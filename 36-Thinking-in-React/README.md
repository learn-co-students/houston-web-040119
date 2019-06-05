# Thinking in React

**Learning Goals:**
*  Write declarative code using state & JSX to reflect the DOM
*  Lift state when appropriate
*  Refactor React code
*  Think in React

**Reading:** https://reactjs.org/docs/thinking-in-react.html

**Steps:**
1. Break The UI Into A Component Hierarchy
2. Build A Static Version in React
3. Identify The Minimal (but complete) Representation Of UI State
4. Identify Where Your State Should Live
5. Add Inverse Data Flow



**Lab**
1. Break The UI Into A Component Hierarchy
   ```html 
   <App />
       <Filter />
       <PetBrowser />
           <Pet />
   ```
2. Build A Static Version in React
> Already Given in the lab
3. Identify The Minimal (but complete) Representation Of UI State
> What kind of states do we need? => Pets and Filter:{type: "all"}
4. Identify Where Your State Should Live
> In the <App /> component
5. Add Inverse Data Flow
> Creating functions and passing it down/up the tree


# Answers

1.  What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.
    
    > React attempts to solve the problem of generating elements on a webpage based on data _that is not known at compile-time_. React allows developers to more quickly write HTML elements in their JS files with "components" that _look_ (mostly) like native HTML. React provides ways to write components as classes or functions and methods for manipulating them so they can respond to user interaction and other conditions at run-time.

2.  What does it mean to think in React?
    
    > Thinking in React means thinking of HTML elements/components as objects or functions. This is already how I thought about HTML, so it's not so big of a difference. The biggest difference is that React allows me to think a little more about the structure of my HTML instead of worrying about coding all the content by hand.

3.  Describe state.
    
    > Instances of React components can have information associated with them in the form of "state". When using React hooks, these state variables are created using `React.useState`, which returns a state's value and a setter function.

4.  Describe props.
    
    > `props` (properties, or parameters) are how React passes data along to child components. When writing in JSX, `props` are written just like html attributes (`<Component param1={arg1} param2={arg2}/>`) and are accessed by the child component function as fields of its input parameter (`Component = ({param1 , param2}) => {/*...*/}`).

5.  What are side effects, and how do you sync effects in a React component to state or prop changes?
    
    > Side effects are the things that happen "alongside" or "outside" of your code. They can be as simple as the results of `console.log`ing. They can also involve the communication that happens between your browser and a server. When using function React components, you deal with side effects with the `React.useState` and `React.useEffect` hooks. These let you respond to changes of state.

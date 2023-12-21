# ReactJS-Beginner


## npx 
 - [x] npx create-react-app <project_name> 

## npm 
 - [x] npm install create-react-app -g - install pacages for globally
   - create-react-app <project-name> 

## Component
 - [x] Components describe a part of the user interface.They are re-usable and can be nested inside othe components.
 - ### Component Types 
 - [x] Stateless Functional Component:
   - JavaScript Function:
   ~~~
   function Welcome(props){
    return <h1>Hello, {props.name}</h1>;
   }
   ~~~
 - [x] Stateful Class Component
   - Class extending Component class 
   - Render method returning HTML
   ~~~
   class Welcome extends React.Component{
    render(){
      return <h1>Hello, {this.props.name}</h1>;
    }
   }
   ~~~
 - [x] Functional and Class Components Comparision:
   - [x] <b>Functional</b>
    - Use Func components as much as possible
    - Absence of 'this' keyword'
    - Solution without using state
    - Mainly responsible for the UI
    - Stateless/Dump/Presentational
   - [x] <b>Class</b>
    - More feature rich
    - Maintain their own private data -state
    - Complex UI logic
    - Provide lifecycle hooks
    - Stateful/Smart/Container

## Hooks
 - [x] Hooks are  a new feature proposal that lets you use state and other React features without a class.
   - No breacking changes.
   - Completely opt-on & 100% backwards-compatible.
   - What ever we've learned so far in this series still hold good.
   - Components types- Functional and Class components.
   - Using state, life-cycle methods and 'this' binding.
   - After understanding state,event binding and lifecycle hooks in class components.

## JSX
 - JavaScript XML (JSX) - Extension to the JavaScript language syntax.
 - Write XML-like code for elements and components.
 - JSX tags have a tag name, attributes,and children.
 - JSX is not a necessity to write React application.
 - JSX makes your react code simpler and elegant.
 - JSX ultimately transpiles to pure JavaScript which is understood by the browsers.
   - [x] JSX difrences
    - class -> className
    - for -> htmlFor
    - [x] camelCase property naming convention.
      - onclick -> onClick
      - tabindex ->tabIndex
# ReactJS-Beginner


## npx 
 - [x] npx create-react-app <project_name> 

## npm 
 - [x] npm install create-react-app -g - install pacages for globally
   - create-react-app <project-name> 

## Component
 - [x] Components describe a part of the user interface.They are re-usable and can be nested inside othe components.
 - # Component Types 
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
   - [ ] <b>Functional</b>
    - Use Func components as much as possible
    - Absence of 'this' keyword'
    - Solution without using state
    - Mainly responsible for the UI
    - Stateless/Dump/Presentational
   - [ ] <b>Class</b>
    - More feature rich
    - Maintain their own private data -state
    - Complex UI logic
    - Provide lifecycle hooks
    - Stateful/Smart/Container

    

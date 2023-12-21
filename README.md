# ReactJS-Beginner


## npx 
 - [x] npx create-react-app <project_name> - 

## npm 
 - [x] npm install create-react-app -g - install pacages for globally
   - create-react-app <project-name> –≠

## Component Types
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
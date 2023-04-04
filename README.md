#### Home Page


Pease click on the link below to have a glance on weather app

[Thunder Weather](https://hafizkh.github.io/Thunder-Weather/)

##### How to use the Thunder App?

- Click on the Thunder Weather
- Once the application opens, It directs to the Home Page
- Click on the Log in in the Header
- Once LoggedIn alert appears, app redirects the weather page
- Write the city name to see the weather of the respective city

### Techstack in the Application
- React
- React-Router
- React-Bootstrap
# React Weather API Application

# 1. React Basics
 ### 1. What is React.js?

React is a Facebook-developed FrontEnd JavaScript Library which is widely used to make a larger application. The aim of using React is to make the Visual Interfaces simple. React allows its developers to perform CRUD tasks without reloading the page. React is being used by the companies like facebook, Netflix, Instagram, migri, canva udemy etc.

 ### 2. Setup tools for React App
 
 #### The following tools required to use React Journey
 - VS Code (Code Editor to write the code)
 ##### VS Code Extensions:
  - RapidAPI to use as testing API like Postman.
  - ES7 React / Redux Snippets to write the code quickly as this extension provides code snippets.
  - Bracket Pair Colorizer, this extension provides the help to check the brackets by using the same color scheme of starting and ending the bracket.
  - Auto Rename Tag, This extension provides the help to change the name of the tag by changing the name of only the starting tag but ending tag changes automatically
 ##### Chrome Extensions:
 - React Dev tools (Chrome Extension to visualize the React result better) as shown in the fig.
  ![alt devTools](src/images/React_dev_tools.PNG)
 ###### For Backend:
 - Node Js (To execute JS without using browser)

### 3. What is React JSX?

JXS is actually a syntax extension in JS which allows developers to write HTML inside React. JSX is the abbreviation of JavaScript XML. The example of JSX is as follows:

```javascript
const languages= (
<ul>
 <li> Java </li>
 <li> PHP </li>
 <li> Scala </li>
 </ul>
 )
```
In JavaScript, class is reserved keyword, so that developers must use className to execute the JSX like as follows:

```javascript
const greet = <h1 className = "greetings"> Hello </h1>

```

### 4. What are components in React?

In fact, Every thing is component in React. To explain the concept, we can say in simple words that the component is an isolated piece of interface. In the application, Navbar, Sidebar etc are all components. These components are made separately and join together and as a result, one React Application completes.

#### Types of Components:
In React, there are two types of components.
- Function based component
- Class based component

#### Function based component:

The function based component is basically a JavaScript function that returns HTML, which is JSX. The example is:

```javascript
function Clock = () => {
   return <h1> Clock is Important </h1>
}
```

#### Class based component:

The class based components are typically JavaScript class which extends React.Component. Here is the example

```javascript

import React, { Component } from 'react'

class Clock extends Component {
render(){
return <h1> Clock is Important </h1>
}
}

```

### 5. How to create a new React App?

In ordert to create a new react app, one should follow certain steps and then, we get folder package in our local machine from the React. At first we should run the following command in the PowerShell terminal of VS Code:

```bash
npx create-react-app weatherapi
```

By executing the above command, we get a full package automatically from the React in the selected location and to start the installed project, we should change directory, if the seected location is different by run the following command:

```bash
cd weatherapi
```

Once everyting is open and ready to start work in code Editor (VS Code), we should write the following command to start the first default React app.

```bash
npm run start
```
After successfully execution of the app, we will get the result like this as given below:

![alt devTools](src/images/Start_Screen.PNG)

In this way, we create a new React app and later, certainly we customize the folders and files include in the package as per our need.


# 2. React State and Events

### 1. What is the React State?

In simple words, State is built-in React Object to store data about the component. The stored value varies in state, the component renders again. It is a private Object which cannot be accessed outside the class. Actually, it acts as a variable and can be used where we want.

### 2. Demo of State in React

In the demonstration of state, we must have a constructor as this would be used to call the default state. The exmaple is shown in the given below:
```javascript

import React, { Component } from 'react'

export default class Weather extends Component {

    constructor(){
        super();
        this.state = {
            day : 'Thursday'
            
        }
    }
  render() {
    return (
      <div>
        <h1> On {this.state.day}, there is Raining</h1>
      </div>
    )
  }
}


```

In this way, we can call the state and the value changes accroding to the component. There is also possibility to set several states at the same time and 'this' keyword uses to call the required set state as shown:

```javascript

import React, { Component } from 'react'

export default class Weather extends Component {

    constructor(){
        super();
        this.state = {
            today : 'Thursday',
             yesterday: 'Wednesday'
            
        }
    }
  render() {
    return (
      <div>
        <h1> On {this.state.today}, there is Raining</h1>
        <h1> On {this.state.yesterday}, there was Sunny</h1>
      </div>
    )
  }
}


```

The result of these codes can be shown in the image

![alt devTools](src/images/Demo_State_React.PNG)

### 3. What is an event?

Event in React is defined as an action, which is being triggered by a user action. There are several events in the React which is being used as a result of triggered. Few of them are as follows:

| Mouse | Composition | Clipboard | Media |
| --- | --- | --- | --- |
| onClick | onCompositionEnd | onCopy | onAbort|
| onContextMenu | onCompositionStart | onCut | onCanPlay |
| onDoubleClick | onCompositionUpdate | onPaste | onCanPlayThrough |

### 4. Event Handling in React

As far as handling events concerned in React, there is a function need to be called inside the event in the component class. It is named as Camel Case instead of lower case letters like onClick, onCut, onPaste etc. The following code is the representation of events handling in the React. Events are being hanlded different in the class based components and function based components. Below is the example of function based component event handler.

```javascript
const test = () => {
alert ('This is test')
}
<button onClick={test}>Click Me</button>
```

Here is the event being handled in the class based component.

```javascript
test () {
 alert ('This is test')
}
<button onClick={() => this.test()}>Click Me</button>
```

### 5. Demo of React Events

The demonstration of the events being handled in the React is given as:

```javascript
import React, { Component } from "react";
import "./App.css";

export default class Weather extends Component {
  handleWeather() {
    alert("Happy Rainy day");
  }
  render() {
    return (
      <div className="App">
        <h1> Today, there is Raining</h1>
        <button onClick={() => this.handleWeather()}>Greeting</button>
      </div>
    );
  }
}
```

The result of the above code is given in the following scrennshot
![alt devTools](src/images/Event_handler.PNG)

# 3. React Hooks

### 1. What are React Hooks?

Hooks allow functional components to get access to the state and other React features. In Class components, Hooks are no longer be used bu only functional components. In order to use Hooks, React Developer must take into account some rules which are given below:

#### Rules in Hooks:

- Hooks can only be called at the top level of the component
- Hooks can be used only in functional components.
- Hooks cannot be conditional, and these are not allowed to use in Class components.

There are Built-in hooks in the React and some of them are given below:

  - useState
  - useEffect
  - useReducer
  - useContext
  - useMemo
  - useRef

### 2. React Hooks Demo:


The demonstration of the Hooks can be seen in the followinf example:


```javascript
import React, { useState } from 'react';  

const FrontendStack = ()=>{
  const [language, setLanguage] = useState('JS)

  return(
    <>
    <button onClick= {()=> setLanguage('TS')}> Update Language</button>
</>
  )
}
```

By clicking the update, the data will be set as new language which is 'TS' in this example. There must be default value too in the initial state which is 'JS'. Once the button would be clicked, the state change from JS to TS.


### 3. Building Single Page Application(SPA) With React.js

#### What is SPA?
Single page application (SPA) are the applications which are basically do not load again and again by requesting from the client to the server. SPA loads only once and by making a new request by the user, server returns a new document but the page renders to the client side never wiped away, which behaves like a desktop application.

#### Examples of SPA:
- Gmail
- Facebook
- Instagram
- Migri
- Netflix
  
#### Building SPA with React.js

In order to create a single page application by React, we need to use the React-Router-dom in the React project. As we know that, in the application, there are certain pages, components where we need to move one another.

All the required pages and routes, which are need to render once the page changes and certainly, the right contents need to show on the page. To ensure all these changes, we should take care the URL of the pages in the App.js and To avoid loading during the routing in the pages, we replace `a` tag to `Link` tag and `#` replaces to `to` which creates the application, known as Single Page Application (SPA).


# 4. Weather Application API

Following screen shots have been taken for reference

![alt devTools](src/images/ss1.JPG)

- If the time of the searched city is day, then this type of image renders

![alt devTools](src/images/ss2.JPG)

- If the time of the searched city is night, then this type of image renders

![alt devTools](src/images/ss3.JPG)

### Folder Structure of the Project

<pre>
├───.vscode
├───build
│   └───static
│       ├───css
│       ├───js
│       └───media
├───public
└───src
    ├───components
    ├───images
    └───pages
</pre>


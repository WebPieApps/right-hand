# React Helper

## Environment Setup

### CLI
create-react-app - Is a great package for setup react project.

$ npx create-react-app project-name

* Run project
$ npm start - from the root folder

### CDN


## Project Setup and Dependencies

### Folder Structures
Will add a link here

### Basic dependencies
* add sass compiler
$ npm i --save node-sass

* add router
There are three router in react - all are third party packages
- react-router - this is the base package
- react-router-dom - this is for web based application
- react-router-native - this is for native app

Additionally! there are one more package
- routerhooks
 this is alternative of react-router-dom and it works on 16 and greater version of react

* Style dependencies
- Bootstrap is quite simple to use as a CDN - only styles in the index.html
- Or also material-ui can be used 

### Components

* class component
It has state feature and also life cycles like render() componentDidMount() etc

* function component
its quite good to use and also now in react 16 and above- you can enable states using hooks


### Data Sharing

* props
- you can share data between parent to child component using props
- you can also share function from parent to child

* you can also use two way data binding - by playing with state and events with form elements

#### props syntax
Parent component
<Child myName={"hidayt"} />

In the child components
props.myName; - this will have the "hidayt"

```
    props.yourProperty


```

### Hooks

#### state

#### cycle

### router



### Events and Method Handling
* you can use normal onClick of javascript and html


to be continued...
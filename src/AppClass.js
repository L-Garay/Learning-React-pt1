import React from 'react';
import './App.css';

// NOTE Class based component
// It needs to extend the base React Component class
// There are multiple lifecycle hooks, but 'render()' is required and is used to render the DOM when the component is created
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello From React</h1>
      </div>
    );
  }
}

export default App;

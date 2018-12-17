import React from 'react';

const ThemeContext = React.createContext('light');

function Toolbar(props) {
  return (
    <div>
      <ThemeButton />
    </div>
  )
}

class ThemeButton extends React.Component {
  static contextType = ThemeContext;

  render() {
    console.log(this.context);
    return <button style={{color: this.context}}>kkdosk</button>
  }
}


export default class ContextComponent extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value="blue">
        <Toolbar />
      </ThemeContext.Provider>
    )
  }
}

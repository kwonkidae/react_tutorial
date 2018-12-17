import React from 'react';
import {ThemeContext, themes} from './theme-context';
import ThemedButton from './theme-button';

function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  );
}

export default class ThemeApp extends React.Component {
  constructor(props) {
    console.log('constructor');
    super(props);
    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
  }

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
          <ThemedButton />
        </ThemeContext.Provider>
        <div>

        </div>
          
      </div>
    );
  }
}

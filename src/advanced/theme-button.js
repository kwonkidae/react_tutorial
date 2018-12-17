import React from 'react';
import {ThemeContext} from './theme-context';

console.log(ThemeContext);
class ThemedButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <button
        {...props}
        style={{background: theme.background}}
      ></button>
    )
  }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;

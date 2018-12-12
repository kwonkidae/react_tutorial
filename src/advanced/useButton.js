import React from 'react'

import FancyButton from './forwardingRef';



export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {label: 'Click me'}
    this.buttonRef = React.createRef();

    setTimeout(() => { this.setState({label: 'kkdosk'})}, 1000)
  } 
  render() {
    return (
      <FancyButton 
        label={this.state.label}
        ref={this.buttonRef}
      />
    )
  }
}
// } {
//   const ref = React.createRef();

//   return (
//     <FancyButton 
//       label="Click Me"
//       ref={ref}
//     />
//   )
// }

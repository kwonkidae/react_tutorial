import { createPost, editPost, setFilter } from './actions';
import appReducer from './reducers/reducers';
import { createStore} from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import Ele from './component/element.js'
import Welcome from './component/welcome'
import App from './component/app';
let store = createStore(appReducer);
const root = document.getElementById('root');

// const render = () => {
//   root.innerHTML = ''
//   const { posts } = store.getState();
//   posts.forEach((post, index) => {
//     const item = document.createElement('li');
//     item.addEventListener('click', () => {
//       store.dispatch(editPost(index, post.text + '!'));
//     });
//     const  text = document.createTextNode(post.user + ' - ' + post.text)
//     item.appendChild(text)
//     root.appendChild(item);
//   })
// };

// const stopRender = store.subscribe(render);
// store.dispatch({ type: 'CREATE_POST', user: 'dan', text: 'hello world'});
// store.dispatch(createPost('des', 'second post'));

// const name = 'Josh Prerez';
// const element = <h1>Hello, {name}</h1>;

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>
  }
  return <h1>Hello, Stranger.</h1>
}

let ele = (
  <h1 className="greeting">
    Hello, world
  </h1>
)

ele = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!!!'
);

ele = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!!!!'
  }
};

console.log({...user})

const testUser = {
  name: 'kwon'
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// function tick() {
//   <Welcome></Welcome>,
//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);

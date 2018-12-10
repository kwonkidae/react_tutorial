import React from 'react';
import Welcome from './welcome';
import Clock from './Clock';
import Toggle from './Toggle';
import LoginControl from './Greeting';
import Mailbox from './Mailbox';
import WarningBanner from './WarningBanner';
import List from './List';
import ListItem from './ListItem';
import Blog from './Blog';
import NameForm from './NameForm';
import EssayForm from './Form/EssayForm';
import FlavorForm from './Form/FlavorForm';
import ReservationForm from './Form/Reservation';
// import Calculator from './Calculator';
import { Calculator } from './liftStateUp'
const messages = ['React', 'Re: React', 'Re:Re React'];
const numbers = [1,2,3,4,5];
const posts = [
  {id: 1, title: 'Hello world', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];


export default function App(props) {
  return (
    <div>
      <Calculator />
      {/* <ReservationForm />
      <FlavorForm />
      <NameForm />
      <EssayForm /> */}
      {/* <Clock />
      <Toggle />
      <LoginControl isLoggedIn={false} />
      <Mailbox unreadMessages={messages} />
      <WarningBanner />
      <List numbers={numbers}></List>
      <ListItem numbers={numbers}></ListItem>
      <Blog posts={posts} /> */}
    </div>
  );
}

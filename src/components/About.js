import React from 'react';
import UserClass from './UserClass';

const About = () => {
  return (
    <div className='component-top-spacing'>
      <h1>About us</h1>
      <h2>This is namaste React Web series</h2>
      <hr/>
      <UserClass name={'Rohini (class)'} location={'Gurgaon'} contact={'rohini19394@gmail.com'}/>
    </div>
  );
}

export default About;

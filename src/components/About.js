import React from 'react';
import UserClass from './UserClass';

// const About = () => {
//   return (
//     <div className='component-top-spacing'>
//       <h1>About us</h1>
//       <h2>This is namaste React Web series</h2>
//       <hr/>
//       <UserClass name={'Rohini (class)'} location={'Gurgaon'} contact={'rohini19394@gmail.com'}/>
//     </div>
//   );
// }

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log('Parent Constructor');
  }
  async componentDidMount() {
    this.timer = setInterval(() => {
      console.log('Namaste React Timer');
    }, 1000);
    console.log('Parent Component Did Mount'); // best place to make API calls
  }

  componentDidUpdate(){
    console.log('Parent Component Did Update'); // this will called whenever there is a change in state or props of this component.
  }

  componentWillUnmount(){
    clearInterval(this.timer); // to clear the timer set in componentDidMount
    console.log('Parent Component Will Unmount'); // this will only called when we navigate away from about page means this function is use for cleanup of current component.
  }

  render() {
    console.log('Parent Render');
    return (
      <div className='component-top-spacing'>
        <h1>About us</h1>
        <h2>This is namaste React Web series</h2>
        <hr />
        <UserClass name={'Rohini (class)'} location={'Gurgaon'} contact={'rohini19394@gmail.com'} />
      </div>
    );
  }
}

export default About;

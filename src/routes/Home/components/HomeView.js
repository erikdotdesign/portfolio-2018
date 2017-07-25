import React from 'react';
import WorkList from './WorkList';
import Splash from './Splash';

export const HomeView = () => (
  <div className="typeset">
    <Splash />
    <WorkList />
  </div>
);

export default HomeView;


// <div className="column column--duo">
//   <p>
//     Thanks for taking the time to check out my portfolio!
//     If you didn’t know by now my name is Erik and I’m a Designer from Cleveland, OH.
//     A couple years ago, after receiving my BFA in Graphic Design, I moved out west to the SF bay area.
//     My skills include UI/UX Design, Product Design and Branding/Identity.
//     I also dabble in Front-End Development.
//   </p>
// </div>

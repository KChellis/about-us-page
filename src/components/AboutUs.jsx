import React from 'react';
import PeopleList from './PeopleList';


function AboutUs(){
  return (
    <div>
      <style jsx>
        {`
          .people-list {
            margin: 50px;
          }

          h2 {
            margin: 50px;
          }
        `}
      </style>
      <h2>EXECUTIVE TEAM</h2>
      <div className="people-list">
        <PeopleList/>
      </div>
    </div>
  );
}

export default AboutUs;

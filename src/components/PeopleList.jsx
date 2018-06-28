import React from 'react';
import Person from './Person';

const people= [
  {
    'name': 'ANTHONY CASALENA',
    'position': 'FOUNDER & CHIEF EXECUTIVE OFFICER',
    'description': 'Anthony Casalena is the Founder and CEO of Squarespace, which he started from his dorm room in 2003. During the company’s early years, Anthony acted as the sole engineer, designer, and support representative for the entire Squarespace platform. In addition to running the company and setting overall product strategy, he remains actively involved in many departments of the company that he had previously run himself. Anthony holds a Bachelor of Science in Computer Science from the University of Maryland.',
    'twitter': '@acasalena',
    'image': 'https://static1.squarespace.com/static/ta/5134cbefe4b0c6fb04df8065/9398/assets/pages/about/team/executive-team/anthony-casalena-300w.jpg',
    'id': '1'
  },
  {
    'name': 'NICOLE ANASENES',
    'position': 'CHIEF FINANCIAL OFFICER & CHIEF OPERATING OFFICER',
    'description': 'Nicole brings to Squarespace 20 years of experience building new businesses and transforming legacy business models. Most recently, she served as Chief Financial Officer at Infor, one of the largest providers of enterprise applications in the world. Prior to Infor, Nicole spent 17 years in various operational and financial leadership positions within IBM’s Cloud Computing, Global Services, and Software organizations. She holds an MBA from The Wharton School of the University of Pennsylvania and a Bachelor’s degree from New York University.',
    'twitter': '',
    'image': 'https://static1.squarespace.com/static/ta/5134cbefe4b0c6fb04df8065/9398/assets/pages/about/team/executive-team/nicole-anasenes-300w.jpg',
    'id': '2'
  },
  {
    'name': 'ANDREW BARTHOLOMEW',
    'position': 'SENIOR VICE PRESIDENT, STRATEGY',
    'description': 'As the leader of Squarespace’s Strategy division, Andrew is responsible for developing the analytical frameworks that shape the company’s business. Since joining Squarespace, he has grown the division into a team that covers everything from business strategy and customer insights to analytics and data science. Prior to Squarespace, Andrew worked at the New York County District Attorney’s Office helping to shape the office’s new data-driven approach to fighting crime. Andrew graduated from Yale, where he majored in Psychology and was an editor at the Yale Daily News.',
    'twitter': '',
    'image': 'https://static1.squarespace.com/static/ta/5134cbefe4b0c6fb04df8065/9398/assets/pages/about/team/executive-team/andrew-bartholomew-300w.jpg',
    'id': '3'
  }
];

function PeopleList(){
  return (
    <div>
      {people.map((person) =>
        <Person name={person.name}
          position={person.position}
          description={person.description}
          twitter={person.twitter}
          image={person.image}
          key={person.id} />
      )}
    </div>
  );
}

export default PeopleList;

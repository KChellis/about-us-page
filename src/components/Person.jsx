import React from 'react';
import PropTypes from 'prop-types';

function Person(props){
  return (
    <div className="person">
      <style jsx>
        {`
          .person {
            display: flex;
            margin: 30px auto;
          }

          .img {
            margin-right: 30px;
          }

          .description {
            padding-right: 500px;
            min-width: 400px;
          }

          .person-text {
            padding: 6px 0;
          }
        `}
      </style>
      <div className="img">
        <img src={props.image}/>
      </div>
      <div >
        <h3 className="person-text">{props.name}</h3>
        <h6 className="person-text">{props.position}</h6>
        <p className="description">{props.description}</p>
        <h6 className="person-text">{props.twitter}</h6>
      </div>
    </div>
  );
}

Person.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  twitter: PropTypes.string,
  image: PropTypes.string.isRequired
};
export default Person;

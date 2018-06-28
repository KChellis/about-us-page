import React from 'react';


function LandingPage(){
  return (
    <div>
      <style jsx>
        {`
          .jumbo {
            background: url(https://static1.squarespace.com/static/ta/5134cbefe4b0c6fb04df8065/9398/assets/pages/about/team/board-room-1500w.jpg);
            height: 500px;
            width: 100%;
            background-size: cover;
            background-position: 0 40%;
          }
        `}
      </style>
      <div className="jumbo"></div>
    </div>
  );
}

export default LandingPage;

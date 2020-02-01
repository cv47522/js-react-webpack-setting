import React from 'react';
import ReactDOM from 'react-dom';

import Main from 'components/Main.jsx';

window.onload = function () {
  setInterval(tick, 1000);
};

function tick() {
  const date = new Date().toLocaleTimeString();
  ReactDOM.render(
    (<div>
      <h1>Hello {date}</h1>
      <h1>Hello {12 + 9}</h1>
      <Main />
    </div>
    ),
    document.getElementById('root')
  );
}

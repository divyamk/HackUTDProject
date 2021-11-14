import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Button from '@mui/material/Button';

function App() {
  return <Button variant="contained">Hello World</Button>;
}

ReactDOM.render(<App />, document.querySelector('#app'));
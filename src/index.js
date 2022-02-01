import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme } from '@mui/material';
import { Button } from '@mui/material';
import { orange, blue } from '@mui/material/colors';
import { ThemeProvider } from '@material-ui/styles';
import { Global } from '@emotion/react';
import Main from './Main';

const muiTheme = createTheme({
  palette: {
    primary: blue,
    accent: orange
  },
  appBar: {
    height: 50
  }
})

const WrapApp = () => (
  <ThemeProvider muiTheme={muiTheme}>
    <Main />
  </ThemeProvider>
)

function Tester(){
  return <Button variant="contained">Hello World</Button>;
}

var element = React.createElement('h1', { className: 'greeting '}, 'Hello, world!');
ReactDOM.render(<WrapApp />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

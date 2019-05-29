import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Home } from './components/home';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';


// TODO: create custom palette
const palette = { primary: { main: '#42A5F5' } };
const theme = createMuiTheme({ palette });

ReactDOM.render((
  <ThemeProvider theme={theme}>
    <Home />
  </ThemeProvider>
), document.getElementById('app'));
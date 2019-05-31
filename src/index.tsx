import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Home } from './components/home';
import { ThemeProvider } from '@material-ui/styles';
import { khrtzTheme } from './components/theme';

ReactDOM.render((
  <ThemeProvider theme={khrtzTheme}>
    <Home />
  </ThemeProvider>
), document.getElementById('app'));
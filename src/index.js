import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/GlobalStyle';
import theme from './theme/theme';

import WhatsAppPage from './pages/WhatsAppPage';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <WhatsAppPage />
  </ThemeProvider>,
  document.getElementById('root')
);

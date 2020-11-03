import React from 'react';
import PropTypes from 'prop-types';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from 'theme';
import Header from 'components/header/index';

import useStyles from './styles';

const Layout = ({ children }) => {
  const styles = useStyles();

  return (
       <ThemeProvider theme={theme}>
        <CssBaseline />
          <main className={styles.content}>
          <Header />
          <div className={styles.toolbar} />
            {children}
        </main>
      </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

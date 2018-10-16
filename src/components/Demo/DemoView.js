import React from 'react';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

const DemoView = (props) => {
  const { weather, getCurrentWeather, classes } = props;
  const temperature = weather && weather.get('temperature');
  return (<div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        The current temperature is {temperature}.
      </p>
      <Button variant="contained" color="primary" className={classes.button} onClick={getCurrentWeather}>
        Get Current Weather
      </Button>
    </header>
  </div>);
};

export default withStyles(styles)(DemoView);

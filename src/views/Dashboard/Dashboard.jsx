import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts

// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import Avatar from "@material-ui/core/Avatar"
import Accessibility from "@material-ui/icons/Accessibility";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import caloriesImage from "../../assets/img/NewCalorie (1).png"
import carbonImage from "../../assets/img/NewCarbon (1).png"
import distanceImage from "../../assets/img/NewDistance (1).png"
import tripsImage from "../../assets/img/Move-Blue (1).png"
import timeImage from "../../assets/img/time (1).png"




import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6}>
            <Card>
              <CardHeader stats icon>
                <CardIcon color="primary">
                  <img  className={classes.logo}  src={tripsImage}/>
                </CardIcon>
                <p className={classes.cardCategory}>Total trips</p>
                <h3 className={classes.cardTitle}>
                  319
                </h3>
              </CardHeader>
              <CardFooter stats>
                
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="danger">
                  <img  className={classes.logo} src={timeImage}/>
                </CardIcon>
                <p className={classes.cardCategory}>Total trip duration</p>
                <h3 className={classes.cardTitle}>9592.87 min</h3>
              
              </CardHeader>
              <CardFooter stats>
              
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card>
              <CardHeader color="danger" stats icon>
                <CardIcon color="primary">
                  <img className={classes.logo}  src={distanceImage}/>
                </CardIcon>
                <p className={classes.cardCategory}>Total Distance </p>
                <h3 className={classes.cardTitle}>583.73 Km</h3>
              </CardHeader>
              <CardFooter stats>
                
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <img className={classes.logo}  src={caloriesImage}/>
                </CardIcon>
                <p className={classes.cardCategory}>Calories burned</p>
                <h3 className={classes.cardTitle}>13423 Kcal</h3>
              </CardHeader>
              <CardFooter stats>
           
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <img className={classes.logo} src={carbonImage}/>
                </CardIcon>
                <p className={classes.cardCategory}>Carbon Reduced</p>
                <h3 className={classes.cardTitle}>58373 gm of CO2</h3>
              </CardHeader>
              <CardFooter stats>
                
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);

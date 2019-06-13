import React from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import ModalReadMore from "./ModalReadMore.jsx";

import imagesStyles from "assets/jss/material-kit-react/imagesStyles.jsx";

import { cardTitle } from "assets/jss/material-kit-react.jsx";

const style = {
  ...imagesStyles,
  cardTitle,
};

class Cards extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Card style={{width: "20rem"}}>
        <img
          style={{height: "auto", width: "40%", display: "block"}}
          className={classes.imgCardTop}
          src="https://ui-avatars.com/api/?name=John+Doe"
          alt="Card-img-cap"
        />
        <CardBody className="tc grow">
          <h4 className={classes.cardTitle}>story title</h4>
          <p>userdata.firstname</p>
         <ModalReadMore />
        </CardBody>
      </Card>


    );
  }
}

export default withStyles(style)(Cards);
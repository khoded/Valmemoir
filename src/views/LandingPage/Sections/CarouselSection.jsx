import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import carouselStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";
//import image1 from "assets/img/bg.jpg";


class SectionCarousel extends React.Component {
  render() {
    const { classes, imgSource} = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false
    };
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
              <Card carousel>
                <Carousel {...settings}>
                      {
                            imgSource.map((user, i) => {
                     return(
                    <div key={i}>
                                <img
                                src={imgSource[i]["urls"]["full"]}
                                alt="First slide"
                                className="slick-image"
                              />
                        <div className="slick-caption">
                        <h4>
                          <LocationOn className="slick-icons" />
                          Yellowstone National Park, United States
                        </h4>
                      </div>
                    </div>
                    );
                  })
                }
                </Carousel>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(carouselStyle)(SectionCarousel);

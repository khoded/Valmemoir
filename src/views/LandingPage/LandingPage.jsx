import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

//tachyons styles
import 'tachyons'; 

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import StorySection from "./Sections/StorySection.jsx";
import CarouselSection from "./Sections/CarouselSection.jsx";
import MemoirSection from "./Sections/MemoirSection.jsx";
import ModalFormSection from "./Sections/ModalFormSection.jsx";

//unsplash API
import Unsplash,  { toJson } from 'unsplash-js';
//connect API keys
const unsplash = new Unsplash({
  applicationId: "e9e6340b92801896ebe8167682e9f28c64e1cd1b7547a307bd1a8137b02b3f7f",
  secret: "392c23c259ae20e44c8f4988352a9f1f6a93b2068c4cec672eff33f58e761a1e"
});

const dashboardRoutes = [];




class LandingPage extends React.Component {
  constructor(){
    super()
    this.state ={
      modal: false,
      imgSource: [],
      newUser: {
        firstname: '',
        lastname: '',
        username: '',
        gender: '',
        Headline: '',
        Story: ''

      },
  }
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
}

componentDidMount = () => {
  unsplash.search.photos("intimate couple", 1, 5)
  .then(toJson)
  .then(json => this.setState({imgSource: json["results"]}))
}


 

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          [name]: value
        }
      }),
      () => this.state.newUser
    );
  }





  handleFormSubmit(e) {
    e.preventDefault();

    let userData = this.state.newUser;
    let Data = Object.keys(userData).map(i => userData[i]);
    return Data;
  }


  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newUser: {
        firstname: '',
        lastname: '',
        username: '',
        gender: '',
        Headline: '',
        Story: ''
      }
    });
  }





  render() {
    const { classes, ...rest} = this.props;
    const queryResult = this.state.imgSource;
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="Val Memoir"
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax filter image={require("assets/img/landing-bg.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Your love Story Starts With Us.</h1>
                <h4>
                  Every couple love story needs to be heard, Share your bond and make other couples bond stronger
                  .Share your love story, Start with us.
                </h4>
                <br />
                <ModalFormSection
                  handleInput = {this.handleInput}
                  handleClearForm ={this.handleClearForm}
                  handleFormSubmit={this.handleFormSubmit}
                 />
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <CarouselSection imgSource={queryResult} />
            <StorySection />
            <MemoirSection  handleFormdata={this.handleFormSubmit} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);

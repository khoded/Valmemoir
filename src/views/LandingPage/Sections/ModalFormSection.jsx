import React from 'react';
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

// @material-ui/icons
import Close from "@material-ui/icons/Close";

// core components
import Button from "components/CustomButtons/Button.jsx";

import modalStyle from "assets/jss/material-kit-react/modalStyle.jsx";

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class Modal extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      modal: false,

       newUser: {
        firstname: '',
        lastname: '',
        username: '',
        gender: '',
        Headline: '',
        Story: ''

      },

    };

    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
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
      () => console.log(this.state.newUser)
    );
  }


  handleClickOpen(modal) {
    var x = [];
    x[modal] = true;
    this.setState(x);
  }


  handleClose(modal) {
    var x = [];
    x[modal] = false;
    this.setState(x);
  }


  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;
    console.log(userData)
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



  render(){
    const { classes} = this.props;
    return (
      <div>
        <Button
          color="success"
          onClick={() => this.handleClickOpen("modal")}>
          SHARE YOUR MEMOIR
        </Button>
        <Dialog
          classes={{
            root: classes.center,
            paper: classes.modal
          }}
          open={this.state.modal}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => this.handleClose("modal")}
          aria-labelledby="modal-slide-title"
          aria-describedby="modal-slide-description">
          <DialogTitle
            id="classic-modal-slide-title"
            disableTypography
            className={classes.modalHeader}>
            <IconButton
              className={classes.modalCloseButton}
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={() => this.handleClose("modal")}>
              <Close className={classes.modalClose} />
            </IconButton>
            <h4 className={classes.modalTitle}>Share Your Story</h4>
          </DialogTitle>
          <DialogContent
            id="modal-slide-description"
            className={classes.modalBody}>
            
       
          <GridItem  md={12}>
              <CustomInput
                  id="regular"
                  name={'firstname'}
                  value={this.state.newUser.firstname} 
                  inputProps={{
                      placeholder: "First Name"
                  }}
                  formControlProps={{
                      fullWidth: true
                  }}
                handleChange = {this.handleInput}
              />
          </GridItem>
           <GridItem xs={12} sm={12} md={12}>
              <CustomInput
                  id="regular"
                  value={this.state.newUser.lastname} 
                  name={'lastname'}
                  inputProps={{
                      placeholder: "Last Name"
                  }}
                  formControlProps={{
                      fullWidth: false
                  }}
                  handleChange = {this.handleInput}
              />
          </GridItem>
           <GridItem xs={12} sm={12} md={12}>
              <CustomInput
                  id="regular"
                  value={this.state.newUser.username} 
                  name={'username'}
                  inputProps={{
                      placeholder: "Username"
                  }}
                  formControlProps={{
                      fullWidth: true
                  }}
                   handleChange = {this.handleInput}
              />
          </GridItem>

          <GridItem xs={12} sm={12} md={12}>
             <CustomInput
                  id="regular"s
                  name={'gender'}
                  value={this.state.newUser.gender} 
                  inputProps={{
                      placeholder: "Gender"
                  }}
                  formControlProps={{
                      fullWidth: true
                  }}
                  handleChange = {this.handleInput}
              />
          </GridItem>

           <GridItem xs={12} sm={12} md={12}>
              <CustomInput
                  id="regular"
                  name={'Headline'}
                  value={this.state.newUser.Headline} 
                  inputProps={{
                      placeholder: "Headline"
                  }}
                  formControlProps={{
                      fullWidth: true
                  }}
                   handleChange = {this.handleInput}
              />
          </GridItem>

        <GridItem xs={12} sm={12} md={12}>
              <CustomInput
                  id="regular"
                  name={'Story'}
                  value={this.state.newUser.Story} 
                  inputProps={{
                      placeholder: "Story"
                  }}
                  formControlProps={{
                      fullWidth: true
                  }}
                   handleChange = {this.handleInput}
              />
          </GridItem>
          </DialogContent>
          <DialogActions
            className={classes.modalFooter +" " +classes.modalFooterCenter}>
            <Button
              onClick= {this.handleFormSubmit}
              color="success">
              Share Story
            </Button>
            <Button
              onClick={this.handleClearForm}
              color="danger">
              Clear
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(modalStyle)(Modal);
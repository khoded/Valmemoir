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
    };
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





  render(){
    const { classes, handleInput, handleClearForm, handleFormSubmit} = this.props;
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
                  inputProps={{
                      placeholder: "First Name"
                  }}
                  formControlProps={{
                      fullWidth: true
                  }}
                handleChange = {handleInput}
              />
          </GridItem>
           <GridItem xs={12} sm={12} md={12}>
              <CustomInput
                  id="regular"
                  name={'lastname'}
                  inputProps={{
                      placeholder: "Last Name"
                  }}
                  formControlProps={{
                      fullWidth: false
                  }}
                  handleChange = {handleInput}
              />
          </GridItem>
           <GridItem xs={12} sm={12} md={12}>
              <CustomInput
                  id="regular"
                  name={'username'}
                  inputProps={{
                      placeholder: "Username"
                  }}
                  formControlProps={{
                      fullWidth: true
                  }}
                   handleChange = {handleInput}
              />
          </GridItem>

          <GridItem xs={12} sm={12} md={12}>
             <CustomInput
                  id="regular"s
                  name={'gender'}
                  inputProps={{
                      placeholder: "Gender"
                  }}
                  formControlProps={{
                      fullWidth: true
                  }}
                  handleChange = {handleInput}
              />
          </GridItem>

           <GridItem xs={12} sm={12} md={12}>
              <CustomInput
                  id="regular"
                  name={'Headline'} 
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
              onClick={handleFormSubmit}
              color="success">
              Share Story
            </Button>
            <Button
              onClick={() => this.handleClose("modal")}
              color="danger">
              Close
            </Button>
            <Button
              onClick={handleClearForm}
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
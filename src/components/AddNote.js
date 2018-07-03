import React, { Component } from 'react'
import {Card, Collapse, CardHeader, CardContent, IconButton, CardActions, Icon, TextField} from '@material-ui/core'
import ExpandMore from '@material-ui/icons/ExpandMore';
import ShareIcon from '@material-ui/icons/Share';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Data from '../data/data.json'
import red from '@material-ui/core/colors/red';

const styles = theme => ({
    card: {
      maxWidth: 400,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    actions: {
      display: 'flex',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    expand: {
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
      marginLeft: 'auto',
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    icon: {
      margin: theme.spacing.unit * 2,
    },
    iconHover: {
      margin: theme.spacing.unit * 2,
      '&:hover': {
        color: red[800],
      },
    },
  });
  

class AddNote extends Component{

state = { attach: false,
          color: false,
          add: false
        };

handleAttachClick = () => {
    this.setState({ attach: !this.state.attach });
    
  };

handleColorClick = () => {
    this.setState({ color: !this.state.color });
};

handleAddClick = () => {
  this.setState({ add: !this.state.add });
  this.addCard();
};


addCard = () => {
  console.log("ya llegue aqui");

}


 render(){
    const { classes } = this.props;
     return (
        <Card className="AddNote">
            
                <CardHeader className="collapsible-header card-title"
                    title={this.props.title}>
                </CardHeader>
                <CardActions className={classes.actions} disableActionSpacing>
                  <IconButton>
                      <Icon className={classes.icon}>
                         attach_file 
                      </Icon>
                  </IconButton>
                  <IconButton>
                      <Icon className={classes.icon}>
                        color_lens
                      </Icon>
                  </IconButton>
                  <IconButton
                    onClick={this.handleAddClick}
                  >
                    <Icon className={classes.icon}>
                      add_circle
                    </Icon>
                  </IconButton>
                </CardActions>
                <CardContent>
                <TextField
                id="cardText"
                placeholder="Hola escribe algo"
                className={classes.textField}
                margin="normal"
              />
              </CardContent>
           
        </Card>
    )
 }
}

AddNote.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(AddNote);
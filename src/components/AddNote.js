import React, { Component } from 'react'
import {Card, Collapse, CardHeader, CardContent, IconButton, CardActions, Icon} from '@material-ui/core'
import ExpandMore from '@material-ui/icons/ExpandMore';
import ShareIcon from '@material-ui/icons/Share';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
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

state = { expanded: false };

handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };


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
                      className={classnames(classes.expand, {
                      [classes.expandOpen]: this.state.expanded,
                      })}
                      onClick={this.handleExpandClick}
                      aria-expanded={this.state.expanded}
                  >
                    <Icon className={classes.icon}>
                      add_circle
                    </Icon>
                  </IconButton>
                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    <p className="collapsible-body">{this.props.content}</p>
                    </CardContent>
                </Collapse>
           
        </Card>
    )
 }
}

AddNote.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(AddNote);
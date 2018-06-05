import React, { Component } from 'react'
import {Card, Collapse, CardHeader, CardContent, IconButton, CardActions} from '@material-ui/core'
import ExpandMore from '@material-ui/icons/ExpandMore';
import ShareIcon from '@material-ui/icons/Share';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//import '../css/Note.css'
import classnames from 'classnames';

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
  });
  

class Note extends Component{

state = { expanded: true };

handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };


 render(){
    const { classes } = this.props;
     return (
        <Card className="Note">
            
                <CardHeader className="collapsible-header card-title"
                    title={this.props.title}
                    subtitle="Sabado 11 enero">
                </CardHeader>
                <CardActions className={classes.actions} disableActionSpacing>
                  <IconButton
                      className={classnames(classes.expand, {
                      [classes.expandOpen]: this.state.expanded,
                      })}
                      onClick={this.handleExpandClick}
                      aria-expanded={this.state.expanded}
                      aria-label="Show more"
                  >
                    <ExpandMore />
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

Note.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(Note);
  

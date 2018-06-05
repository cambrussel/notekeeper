import React, { Component } from 'react';
import Note from './Note'
import {Grid} from '@material-ui/core'
import '../css/App.css';
import Data from '../data/data.json'

class App extends Component {
  render() {
    return (
      <Grid container className="App">
          {
            Data.notes.map(
              (note) => 
                <Grid item xs={3}><Note title={note.title} content={note.content} /></Grid>
            )
          }
      </Grid>
    );
  }
}

export default App;

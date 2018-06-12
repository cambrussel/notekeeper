import React, { Component } from 'react'
import Note from './Note'
import {Grid} from '@material-ui/core'
import '../css/App.css';
import Data from '../data/data.json'
import AddNote from './AddNote'



class App extends Component {
  render() {
    return (
      <Grid container justify="center" spacing={16}>
        <Grid xs={6}>
            <AddNote/>
        </Grid>
        <Grid item xs={11}>
          <Grid container justify="center" spacing={24}>
            {
              Data.notes.map(
                (note) => 
                    <Grid item xs={6} sm={6} md={3}>
                      <Note title={note.title} content={note.content} />
                    </Grid>
              )
            }
          </Grid>
        </Grid>
      </Grid>
      
    );
  }
}

export default App;
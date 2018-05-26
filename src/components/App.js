import React, { Component } from 'react';
import Note from './Note'
import {Row, Col, Container} from 'react-materialize'
import '../css/App.css';
import Data from '../data/data.json'

class App extends Component {
  render() {
    return (
      <Container className="App">
        <Row>
          {
            Data.notes.map(
              (note) => 
                <Col s={3}><Note title={note.title} content={note.content} /></Col>
            )
          }
        </Row>
      </Container>
    );
  }
}

export default App;
